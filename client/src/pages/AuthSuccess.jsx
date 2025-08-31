// src/components/pages/AuthSuccess.jsx

import React, { useContext, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import toast, { Toaster } from 'react-hot-toast';

const AuthSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, user, loading } = useContext(UserContext);
  const hasHandledAuthRef = useRef(false);

  useEffect(() => {
    // This effect handles getting the token and calling the login function
    if (hasHandledAuthRef.current) return; // Prevent re-runs
    
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      login(token);
      hasHandledAuthRef.current = true;
    } else {
      navigate('/login');
    }
  }, [location, login, navigate]);

  useEffect(() => {
    // This effect handles the toast and redirect after the user state is updated
    if (!loading && user) {
      toast.success(`Welcome back, ${user.firstName || user.name || user.email.split('@')[0]}!`, {
        duration: 4000,
      });

      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, loading, navigate]);

  return (
    <>
      <Toaster position="top-center" />
      <div>
        <p>Processing login...</p>
      </div>
    </>
  );
};

export default AuthSuccess;