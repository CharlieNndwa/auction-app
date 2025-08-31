const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: function() {
        // 'name' is required only if the user is not logging in with Google
        return !this.googleId;
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: function() {
        // 'password' is required only if the user is not logging in with Google
        return !this.googleId;
      },
    },
    // Add fields for Google authentication
    googleId: {
      type: String,
      unique: true,
      sparse: true, // Allows for null values while maintaining a unique index
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    otp: String,
    otpExpiry: Date,
  },
  { timestamps: true }
);

// Encrypt password before saving
userSchema.pre('save', async function(next) {
  // Only hash password if it's being modified and is not a Google user
  if (this.isModified('password') && this.password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function(enteredPassword) {
  // Check if a password exists before attempting to compare
  if (!this.password) return false;
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;