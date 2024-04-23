// backend/api/users.js
import UserModel from '../models/userModel';
import { AuthMiddleware } from '../middleware/authMiddleware'

async function userHandler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch users from the database
      const users = await UserModel.find({});

      // Return users as JSON response
      res.status(200).json({users});
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default AuthMiddleware(userHandler)
