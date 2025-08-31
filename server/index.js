// server.js

const express = require('express');
const cors = require('cors'); 
const dotenv = require('dotenv').config();
const passport = require('passport');
const session = require('express-session'); // Import express-session
const connectDB = require('./backend/config/db');

connectDB();

require('./backend/config/passport');

const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session middleware for Passport
app.use(
  session({
    secret: process.env.JWT_SECRET, // Use a secret key from your .env file
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === 'production',
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/users', require('./backend/routes/user'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));