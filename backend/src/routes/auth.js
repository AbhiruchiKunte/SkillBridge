// backend/routes/auth.js (UPDATE THIS FILE)
import express from "express";
const router = express.Router();
import { registerUser, loginUser, logoutUser, getMe } from '../controllers/authController.js';
import { auth } from '../middleware/auth.js'; // Import the auth middleware

// @route   POST /api/auth/register
router.post('/register', registerUser);

// @route   POST /api/auth/login
router.post('/login', loginUser);

// @route   GET /api/auth/me (Missing Route)
router.get('/me', auth, getMe); 

// @route   POST /api/auth/logout (Missing Route)
router.post('/logout', logoutUser); 

export default router;