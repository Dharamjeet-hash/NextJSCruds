// backend/api/register.js

import bcrypt from 'bcrypt';
import userModel from '../models/userModel'; // Import the User model
import {registerSchema} from '../validations/auth'
import {extractErrors} from '../utils/common'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Validate request body
    // if (!name || !email || !password) {
    //   return res.status(400).json({ error: 'Name, email, and password are required' });
    // }

    // Validate request body against schema
    const { error, value } = registerSchema.validate(req.body, { abortEarly: false }); // Set abortEarly to false to get all errors
    if (error) {
        let errors = extractErrors(error)
        return res.status(400).json({ errors });
    }

    try {

      // Find the user by email
      const user = await userModel.findOne({ email });

      // Check if user exists and compare passwords
      if (user) {
        return res.status(400).json({ errors: {email:'Email already exist'} });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

      // Create a new user with the hashed password
      const newUser = await userModel.create({
        name,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      // await newUser.save();

      // Return success response
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
