import { body } from 'express-validator';

export const registerValidator = [
  body('email', 'Unacceptable email format').isEmail(),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
  body('fullName', 'Name must be at least 3 character long').isLength({ min: 3 }),
  body('avatarUrl', 'Wrong image/avatar URL').optional().isURL(),
];