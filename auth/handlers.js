const Model = require('./authModel');
const bcryptHelpers = require('../helpers/bcryptHelpers');
const jwtHelpers = require('../helpers/jwtHelpers');

const register = async (req, res) => {
  const { username } = req.body;

  try {
    const password = await bcryptHelpers.hash(req.body.password);

    await Model.add({ username, password });

    res.status(201).json({
      status: 201,
      message: 'User created successfully.',
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Cannot create user',
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Model.getByUsername(username);

    if (!user)
      return res.status(401).json({
        status: 401,
        message: 'Incorrect username.',
      });

    const match = await bcryptHelpers.compare(password, user.password);

    if (!match)
      return res.status(401).json({
        status: 401,
        message: 'Incorrect password.',
      });

    const token = jwtHelpers.sign({ id: user.id });

    res.status(200).json({
      status: 200,
      token,
      message: 'Welcome, step right in.',
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Error login you in.',
    });
  }
};

module.exports = {
  register,
  login,
};
