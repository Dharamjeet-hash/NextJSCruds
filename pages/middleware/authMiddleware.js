// middleware/authMiddleware.js

import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const secretKey = process.env.JWT_SECRET; // Replace with your own secret key

export const AuthMiddleware = (handler) => async (req, res) => {
  try {
    const token = (req.headers.authorization.split(' ')[1])?.trim();

    if (!token) {
      throw new Error('Unauthorized');
    }

    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.user;

    return handler(req, res);
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};
