


// src/UserContext.js

import React, { createContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { toast } from 'react-hot-toast';



export const UserContext = createContext(null);



export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();



    // Helper function to fetch user data from the backend using the token

    const fetchUserDetails = async (token) => {

        try {

            const config = {

                headers: {

                    Authorization: `Bearer ${token}`,

                },

            };

            // Make the API call to your protected endpoint

            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/me`, config);

            const userData = response.data;

            setUser(userData);

            return userData; // Return the user data

        } catch (error) {

            console.error('Error fetching user details:', error);

            localStorage.removeItem('userToken'); // Clear invalid token

            setUser(null);

            return null;

        }

    };



    const login = (token) => {

        localStorage.setItem('userToken', token);

        // Directly fetch user details here after a token is received

        fetchUserDetails(token);

    };



    const logout = async () => {
        try {
            localStorage.removeItem('userToken');
            setUser(null);

            // Corrected API call to use the environment variable
            await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/logout`);

            toast.success("You have been logged out.");
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
            toast.error("Logout failed. Please try again.");
        }
    };




    // useEffect to check for existing token on app load

    useEffect(() => {

        const token = localStorage.getItem('userToken');

        if (token) {

            fetchUserDetails(token);

        }

        setLoading(false);

    }, []);



    // Inactivity countdown logic (optional but good)

    useEffect(() => {

        if (!user) return; // Only set up the timer if a user is logged in

        const resetTimer = () => {

            clearTimeout(window.logoutTimer);

            window.logoutTimer = setTimeout(logout, 30 * 60 * 1000); // 30 minutes

        };

        window.addEventListener('mousemove', resetTimer);

        window.addEventListener('keypress', resetTimer);

        resetTimer(); // Start the initial timer

        return () => {

            clearTimeout(window.logoutTimer);

            window.removeEventListener('mousemove', resetTimer);

            window.removeEventListener('keypress', resetTimer);

        };

    }, [user]); // The effect now depends on the user state



    const value = { user, login, logout, loading };



    return (

        <UserContext.Provider value={value}>

            {!loading && children}

        </UserContext.Provider>

    );

};