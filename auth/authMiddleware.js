module.exports = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      status: 400,
      message: 'Username and password fields must be provided.',
    });
  }

  if (username.length < 3 || password.length < 3) {
    return res.status(400).json({
      status: 400,
      message: 'Username and password length must be three characters or more.',
    });
  }

  next();
};
