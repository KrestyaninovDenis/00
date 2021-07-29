const express = require ('express');
const app = express();

/*
1.1.1 Функция "Создание пользователя"
const user = await UserModule.create(data);
Аргумент data должны соответствовать полям модели User, кроме _id.

Результатом работы функции должен быть Promise, который резолвится с объектом модели User.
*/
const createUser = async (data) => {
    try{
      const UserModule = require('./CONNECT/index').User;
      const user = await UserModule.create(data,  { passwordHash: 0 });
      return user;
    }
    catch {
      //обработка ошибок
    }
  };
//------------------------------------------------------------------------------------------------------------
/*
1.1.2 Функция "Поиск пользователя по email"
const user = await UserModule.findByEmail(email);
Аргумент email должен быть строкой.

Результатом работы функции должен быть Promise, который резолвится объектом модели User или null, 
если пользователь не существует.
*/ 
  const findUser = async (email) => {
    try{
      const emailBD = ({ email:email })
      const UserModule = require('./CONNECT/index').User;
      const user = await UserModule.findOne(emailBD);
      return user;
    }
    catch {
      //обработка ошибок
    }
  };
//------------------------------------------------------------------------------------------------------------
/*
1.2.2 Создание объявления
const advertisement = await Advertisement.create(data);
Аргумент data должны соответствовать полям модели Advertisement, кроме _id.

Результатом работы функции должен быть Promise, который резолвится с объектом модели Advertisement.
*/
const createAdvertisement = async (dataA) => {
    try{
      const AdvertisementModule = require('./CONNECT/index').Advertisement;
      const advertisement = await AdvertisementModule.create(dataA);
      return advertisement;
    }
    catch {
      //обработка ошибок
    }
  };
//------------------------------------------------------------------------------------------------------------
/*
1.2.1 Функция "Поиск объявления"
const advertisements = await Advertisement.find(params);
В объекте params должны учитываться следующие поля:

shortText - поиск регулярным выражением
description - поиск регулярным выражением
userId - точное совпадение
tags - значение в БД должно включать все искомые значения
Поиск должен игнорировать записи, которые помечены удаленными isDeleted = true.

Результатом работы функции должен быть Promise, который резолвится массивом объектов модели Advertisement 
или пустым массивом.
*/
const findAdvertisement = async (params) => {
    try{
  
      params.shortText = {$regex: new RegExp(params.shortText)};
      params.description = {$regex: new RegExp(params.description)};
      params.isDeleted = false;
      const AdvertisementModule = require('./CONNECT/index').Advertisement;
      const advertisements = await AdvertisementModule.find(params);
      return advertisements;
    }
    catch {
      //обработка ошибок
    }
  };
//------------------------------------------------------------------------------------------------------------
/*
1.2.3 Удаление объявления
const advertisement = await Advertisement.remove(id);
Аргумент id должен быть типа string или ObjectId.

Функция поиска не должна удалять запись из БД, а только выставлять значение флага isDeleted = true.
*/

  const find_id_Advertisement = async (id) => {
    try{
      const AdvertisementModule = require('./CONNECT/index').Advertisement;
      const advertisements = await AdvertisementModule.findOneAndUpdate(id,{ $set: {isDeleted: true}}, {returnOriginal: false},);
      return advertisements;
    }
    catch {
      //обработка ошибок
    }
  };
//------------------------------------------------------------------------------------------------------------

  module.exports = {createUser, findUser, createAdvertisement, findAdvertisement, find_id_Advertisement};