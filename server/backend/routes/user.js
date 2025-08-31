// backend/routes/user.js

const express = require('express');
const router = express.Router();
const { 
    registerUser, 
    loginUser, 
    getMe, 
    forgotPassword, 
    resetPassword,
    logoutUser // Add this to the import list
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const passport = require('passport');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
    passport.authenticate('google', { 
        failureRedirect: `${process.env.FRONTEND_URL}/login` // Correct failure redirect
    }), 
    (req, res) => {
        // This block only runs on successful Google authentication
        try {
            // Generate a JWT token for the authenticated user
            const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            
            // Redirect to the front-end AuthSuccess page with the token
            const redirectUrl = `${process.env.FRONTEND_URL}/auth-success?token=${token}`;
            res.redirect(redirectUrl);
        } catch (error) {
            console.error('Failed to generate token after Google auth:', error);
            res.redirect(`${process.env.FRONTEND_URL}/login`);
        }
    }
);

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);


// Protected routes
router.get('/me', protect, getMe);
router.get('/logout', logoutUser); // Ensure this route is present

module.exports = router;