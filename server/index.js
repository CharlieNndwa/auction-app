// server.js

const express = require('express');
const cors = require('cors'); 
const dotenv = require('dotenv'); // Import dotenv

// Load environment variables immediately
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const passport = require('passport');
const session = require('express-session');
const connectDB = require('./backend/config/db');

// Connect to the database
connectDB();

// Passport configuration
require('./backend/config/passport');

const app = express();

// Configure CORS
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session middleware for Passport
app.use(
  session({
    secret: process.env.JWT_SECRET,
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

// Add a simple route for the root URL
app.get('/', (req, res) => {
  res.status(200).send('API is running successfully!');
});

// User routes
app.use('/api/users', require('./backend/routes/user'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));