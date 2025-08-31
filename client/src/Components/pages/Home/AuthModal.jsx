import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import google from "../../../assets/google.png";
import axios from 'axios';
import { toast } from 'react-hot-toast';

// Styled components for the modal
const ModalBackdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled(motion.div)`
    background: #111;
    color: #fff;
    padding: 40px;
    border-radius: 10px;
    max-width: 450px;
    width: 90%;
    position: relative;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    cursor: pointer;
    color: #FFD700;
    font-size: 1.5rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
        width: 100%;
        padding: 12px;
        border: 1px solid #333;
        background-color: #222;
        color: #fff;
        border-radius: 5px;
        font-size: 1rem;
        &:focus {
            outline: none;
            border-color: #FFD700;
        }
    }

    .form-switch {
        text-align: center;
        margin-top: 10px;
        font-size: 0.9rem;
        color: #ddd;

        button {
            background: none;
            border: none;
            color: #FFD700;
            font-weight: bold;
            cursor: pointer;
            margin-left: 5px;
            transition: color 0.3s ease;
            &:hover {
                color: #fff;
            }
        }
    }
`;

const SubmitButton = styled.button`
    background-color: #FFD700;
    color: #000;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-transform: uppercase;
    &:hover {
        background-color: #fff;
    }
`;

const GoogleButton = styled.a`
    background-color: transparent;
    border: 2px solid #FFD700;
    color: #fff;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
    text-decoration: none;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(255, 215, 0, 0) 70%);
        animation: glow 2s ease-in-out infinite;
        opacity: 0;
        transition: opacity 0.3s;
    }

    &:hover::before {
        opacity: 0.5;
    }

    @keyframes glow {
        0% { transform: scale(0) rotate(0deg); opacity: 0.5; }
        50% { transform: scale(1.5) rotate(180deg); opacity: 0; }
        100% { transform: scale(0) rotate(360deg); opacity: 0.5; }
    }
    
    img {
        width: 20px;
        height: 20px;
    }
`;

const Separator = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    color: #666;
    margin: 10px 0;
    
    &::before, &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #444;
    }

    &:not(:empty)::before {
        margin-right: 1em;
    }

    &:not(:empty)::after {
        margin-left: 1em;
    }
`;

// Main component
const AuthModal = ({ isOpen, onClose, initialView, onAuthSuccess }) => {
    const [view, setView] = useState(initialView);
    const [formData, setFormData] = useState({ firstName: '', email: '', password: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // This useEffect ensures the view changes when the modal is opened with a new initialView
    useEffect(() => {
        if (isOpen) {
            setView(initialView);
            // Clear form data when modal opens
            setFormData({ firstName: '', email: '', password: '' }); 
        }
    }, [isOpen, initialView]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const url = view === 'login' ? 'http://localhost:5000/api/users/login' : 'http://localhost:5000/api/users/register';
        const payload = view === 'login' 
            ? { email: formData.email, password: formData.password }
            : { firstName: formData.firstName, email: formData.email, password: formData.password };
        
        try {
            const response = await axios.post(url, payload);
            
            // Call the success handler from the context
            if (onAuthSuccess) {
                onAuthSuccess(response.data);
            }

            // Close the modal after a successful operation
            onClose();

        } catch (error) {
            // Handle errors
            console.error(`${view} failed:`, error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <ModalBackdrop
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <ModalContent
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CloseButton onClick={onClose}><CloseIcon /></CloseButton>
                        
                        {view === 'login' ? (
                            <>
                                <h2>Login to Your Account</h2>
                                <Form onSubmit={handleFormSubmit}>
                                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                                    <SubmitButton type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Logging In...' : 'Login'}
                                    </SubmitButton>
                                    <Separator>or</Separator>
                                    <GoogleButton href="http://localhost:5000/api/users/google">
                                        <img src={google} alt="Google" />
                                        Continue with Google
                                    </GoogleButton>
                                    <div className="form-switch">
                                        Don't have an account? 
                                        <button type="button" onClick={() => setView('register')}>
                                            Sign Up
                                        </button>
                                    </div>
                                </Form>
                            </>
                        ) : (
                            <>
                                <h2>Create an Account</h2>
                                <Form onSubmit={handleFormSubmit}>
                                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                                    <SubmitButton type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? 'Registering...' : 'Register'}
                                    </SubmitButton>
                                    <Separator>or</Separator>
                                    <GoogleButton href="http://localhost:5000/api/users/google">
                                        <img src={google} alt="Google" />
                                        Continue with Google
                                    </GoogleButton>
                                    <div className="form-switch">
                                        Already have an account? 
                                        <button type="button" onClick={() => setView('login')}>
                                            Log In
                                        </button>
                                    </div>
                                </Form>
                            </>
                        )}
                    </ModalContent>
                </ModalBackdrop>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;