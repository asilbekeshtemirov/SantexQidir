import userService from './user.service.js';
import createUserDto from './dtos/create-user.dto.js';
import loginUserDto from './dtos/login-user.dto.js';

const register = async (req, res) => {
  try {
    const { error } = createUserDto.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { error } = loginUserDto.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { user, token } = await userService.login(req.body);
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

export default {register, login}