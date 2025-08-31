const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model
const { sendVerificationEmail } = require('../utils/emailService'); // Import the function

router.post('/register', async (req, res) => {
    try {
        const { firstName, email, password } = req.body;
        // Check if user already exists, hash password, and save user
        const user = new User({ firstName, email, password });
        await user.save();

        // Generate a verification token (this logic should be added)
        const verificationToken = 'some-generated-token';

        // Call the function to send the email
        await sendVerificationEmail(email, verificationToken);

        res.status(201).json({ message: 'Registration successful! Please check your email to verify your account.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});