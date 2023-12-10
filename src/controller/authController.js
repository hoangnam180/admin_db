const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const authMiddleware = require('../middlewares/auth.middlewares');

const refreherTokens = [];
class AuthControllers {
  // [GET] REGISTER
  register = async (req, res) => {
    const body = req.body;
    if (!body) {
      return res.status(500).json({
        errCode: 1,
        message: 'Missing inputs parameter!',
      });
    }
    const userData = await userService.handleUserRegister(body);
    return res.status(200).json({
      errCode: userData?.errCode,
      message: userData?.errMessage,
      user: userData.user ? userData.user : {},
    });
  };

  login = async (req, res) => {
    const username = req.body?.username;
    const password = req.body?.password;
    if (!username || !password) {
      return res.status(500).json({
        errCode: 1,
        message: 'Missing inputs parameter!',
      });
    }
    const userData = await userService.handleUserLogin(username, password);
    return res.status(200).json({
      errCode: userData.errCode,
      message: userData.errMessage,
      user: userData.user ? userData.user : {},
    });
  };

  logout = (req, res) => {
    res.clearCookie('refreherToken');
    return res.status(204).json({
      message: 'successfully',
    });
  };
}

module.exports = new AuthControllers();
