// backend/controllers/authController.js
import User from '../models/User.js'; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// REGISTER USER
export const registerUser = async (req, res) => {
try {
    const { fullName, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role: role || 'VOLUNTEER',
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Send token in HTTP-only cookie
    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
      },
      token,
    });
  } catch (error) {
    console.error('Error in registerUser:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

// LOGIN USER
export const loginUser = async (req, res) => {
try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Send token in cookie
    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error('Error in loginUser:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

// GET AUTHENTICATED USER
export const getMe = async (req, res) => {
    // The auth middleware has already verified the token and set req.user
    // req.user contains { id: user._id, role: user.role }
    try {
        // Fetch the user's latest data without the password
        const user = await User.findById(req.user.id).select('-password'); 

        if (!user) {
            // This shouldn't happen if token is valid, but good to check
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Error in getMe:', error);
        res.status(500).json({ message: 'Server error fetching user' });
    }
};

// LOGOUT USER
export const logoutUser = (req, res) => {
    res.clearCookie('accessToken'); // Clear the JWT cookie
    res.status(200).json({ message: 'Logged out successfully' });
};