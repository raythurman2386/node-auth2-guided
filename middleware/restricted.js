module.exports = () => {
  const authError = {
    message: 'Invalid Credentials'
  }

  return async (req, res, next) => {
    if (req.session && req.session.user) {
      next();
    } else {
      return res.status(401).json(authError);
    }
  }
}