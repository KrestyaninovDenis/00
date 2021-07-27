const express = require ('express');
const app = express();

/*
1.1.1 Функция "Создание пользователя"
const user = await UserModule.create(data);
Аргумент data должны соответствовать полям модели User, кроме _id.

Результатом работы функции должен быть Promise, который резолвится с объектом модели User.
*/

  async function fcreate (data) {
    try{
      const UserModule = require('./connectingBD/index').User;
      const user = await UserModule.create(data);
      return user;
    }
    catch {
      //обработка ошибок
    }
  };
  
  /*
  1.1.2 Функция "Поиск пользователя по email"
  const user = await UserModule.findByEmail(email);
  Аргумент email должен быть строкой.
  
  Результатом работы функции должен быть Promise, который резолвится объектом модели User или null, 
  если пользователь не существует.
  */
  
  async function ffind(email) {
    try{
      const UserModule = require('./connectingBD/index').User;
      const user = await UserModule.findOne(email);
      return user;
    }
    catch {
      //обработка ошибок
    }
  };


module.exports = {
    ffind, fcreate,
};