const express = require ('express');
const app = express();


const createUser = async (data) => {
    try{
      const UserModule = require('./connectingBD/index').User;
      const user = await UserModule.create(data);
      return user;
    }
    catch {
      //обработка ошибок
    }
  };

  module.exports = createUser;