const bcrypt = require("bcryptjs");
const User = require('../model/User');

const checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ email: userEmail });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

const handleUserLogin = (user_name, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(user_name);
      if (!isExist) {
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exist in our system, plz try other email`;
        resolve(userData);
        return;
      }
      //user already exist
      const user = await User.findOne({ username: user_name });
      if (!user) {
        userData.errCode = 2;
        userData.errMessage = `User not found`;
        resolve(userData);
        return;
      }
      // checkPass
      let checkPass = user.password === password;
      if (checkPass) {
        userData.errCode = 0;
        userData.errMessage = "OK";

        delete user.password;
        userData.user = user;
      } else {
        userData.errCode = 3;
        userData.errMessage = "Wrong password";
      }

      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

const handleUserRegister = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      const { name, password, user_name, age } = body;
      let isExist = await checkUserEmail(user_name);
      if (!isExist) {
        const hashPassword = bcrypt.hashSync(password, 10);
        const sql = `INSERT INTO user(id, user_name, name, age, password) VALUES ('${null}','${user_name}','${name}','${age}','${hashPassword}')`;
        const result = await pool.execute(sql);
        userData.errCode = 0;
        userData.errMessage = `Ok`;
        userData.data = result;
      } else {
        userData.errCode = 2;
        userData.errMessage = `email này đã trùng với email trong hệ thống`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleUserLogin: handleUserLogin,
  handleUserRegister: handleUserRegister,
};
