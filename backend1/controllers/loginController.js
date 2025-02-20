const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

// User login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Incorrect email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect email or password' });
    }
    res.status(200).json({ message: 'User authenticated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error authenticating user', error });
  }
};

module.exports = { loginUser };