const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, email, password } = req.body;

    if (!firstName || !email || !password) {
        res.status(400).json({ message: 'Please enter all fields' });
        return;
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }
    
    // Create the new user and set isVerified to true by default
    const user = await User.create({
        name: firstName,
        email,
        password,
        isVerified: true, // Email verification is no longer needed
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            message: 'Registration successful! You can now log in.'
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        // Since isVerified is now always true after registration, this check is redundant
        // but can be kept for future functionality if you re-add it.
        if (!user.isVerified) {
            res.status(401).json({ message: 'Email not verified. Please check your inbox.' });
            return;
        }

        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});


// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

// @desc    Request a password reset OTP
// @route   POST /api/users/forgot-password
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    const otp = otpGenerator.generate(6, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000;
    await user.save();

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending OTP email:', error);
            res.status(500).json({ message: 'Email could not be sent' });
        } else {
            console.log('OTP email sent:', info.response);
            res.status(200).json({ message: 'OTP sent to your email' });
        }
    });
});


// @desc    Reset password with OTP
// @route   POST /api/users/reset-password
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
    const { email, otp, newPassword } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    if (user.otp !== otp || user.otpExpiry < Date.now()) {
        res.status(400).json({ message: 'Invalid or expired OTP' });
        return;
    }

    // Hash the new password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
});

// @desc    Handle Google authentication callback and redirect
// @route   GET /api/users/google/callback
// @access  Public
const googleAuthCallback = asyncHandler(async (req, res) => {
    if (req.user) {
        let user = await User.findOne({ googleId: req.user.id });

        if (!user) {
            user = await User.create({
                googleId: req.user.id,
                name: req.user.displayName,
                email: req.user.emails[0].value,
                isVerified: true,
            });
        }

        const token = generateToken(user._id);
        res.redirect(`${process.env.FRONTEND_URL}/auth-success?token=${token}`);
    } else {
        res.redirect(`${process.env.FRONTEND_URL}/login`);
    }
});

// @desc    Logout a user and destroy the session
// @route   GET /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
    // For a JWT-based system, the logout logic is primarily handled on the client side
    // by removing the token. The backend can simply confirm the action.
    // If you were using sessions, you would destroy the session here.
    res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = {
    registerUser,
    loginUser,
    getMe,
    forgotPassword,
    resetPassword,
    googleAuthCallback,
    logoutUser,
};