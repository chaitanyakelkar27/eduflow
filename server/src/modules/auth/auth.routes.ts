import { Router } from 'express';
import authController from './auth.controller';
import { registerValidation, loginValidation } from './auth.validation';
import { validate } from '../../middlewares/validator';
import { authenticate } from '../../middlewares/auth';

const router = Router();

// POST /api/auth/register - Register new user
router.post('/register', registerValidation, validate, authController.register);

// POST /api/auth/login - Login user
router.post('/login', loginValidation, validate, authController.login);

// GET /api/auth/me - Get current user (protected route)
router.get('/me', authenticate, authController.getMe);

export default router;
