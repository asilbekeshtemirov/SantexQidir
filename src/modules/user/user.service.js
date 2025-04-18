import User from './models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {ACCESS_TOKEN_SECRET,} from '../../config/jwt.config.js';

class UserService {
  async register(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new User({
      ...data,
      password: hashedPassword
    });
    return await user.save();
  }

  async login({ email, password }) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');
    
    const token = jwt.sign({ id: user._id, role: user.role }, ACCESS_TOKEN_SECRET, { expiresIn: '7d' });
    return { user, token };
  }

  async findByRegion(regionId) {
    return await User.find({ region: regionId, role: 'provider' });
  }
}

export default new UserService();
