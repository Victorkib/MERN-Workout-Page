const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const verifyToken = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized! 1 No token provided' });
  }
  try {
    const match = jwt.verify(token, process.env.SECRET);
    if (!match) {
      return res.status(401).json({ error: 'Unauthorized! 2 Invalid Token' });
    }
    const user = await User.findById(match.id).select('_id');
    if (!user) {
      return res
        .status(401)
        .json({ error: 'Unauthorized! 3 No associated user with Given token' });
    }
    console.log(user._id);
    req.user = user._id;
    next();
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error!' });
  }
};
module.exports = verifyToken;
