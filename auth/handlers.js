const Model = require('./authModel');
const bcryptHelpers = require('../helpers/bcryptHelpers');

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

module.exports = {
  register,
};
