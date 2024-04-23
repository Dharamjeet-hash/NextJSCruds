// backend/api/login.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { loginSchema } from '../validations/auth'
import { extractErrors } from '../utils/common'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Validate request body against schema
    const { error, value } = loginSchema.validate(req.body, { abortEarly: false }); // Set abortEarly to false to get all errors
    if (error) {
        let errors = extractErrors(error)
        return res.status(400).json({ errors });
    }

    try {

      // Find the user by email
      const user = await userModel.findOne({ email });

      // Check if user exists and compare passwords
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ errors:{email:'Invalid email or password'} });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id, email, name:user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Return token and user details
      res.status(200).json({ token, user: { _id: user._id, name: user.name, email: user.email } });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
