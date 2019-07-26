const { verify } = require('../helpers/jwtHelpers');

module.exports = (req, res, next) => {
  const token = req.get('Authorization');

  if (!token)
    return res.status(401).json({
      status: 401,
      message: 'No token provided, must be set on the Authorization Header',
    });

  try {
    const isAuthorized = verify(token);

    if (isAuthorized) {
      req.decoded = isAuthorized;
      next();
    }
  } catch (err) {
    res.status(401).json({
      status: 401,
      message: 'No way mate. Run along now.',
    });
  }
};
