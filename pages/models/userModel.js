// models/userModel.js
import mongoose from 'mongoose';
import dbConnection from '../config/conn'
const {Number, String} = mongoose.Schema.Types
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = dbConnection.models.users || dbConnection.model('users', userSchema);


export default UserModel
