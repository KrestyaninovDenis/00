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
    const UserModule = require('./connectingBD/index').User;
    const user = await UserModule.create(data);
    return user;
  }
  catch {
    //обработка ошибок
  }
};
const data = ({ email:'1', passwordHash:'2', name:'3', contactPhone:'4'});
createUser(data).then(console.log);

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
    const UserModule = require('./connectingBD/index').User;
    const user = await UserModule.findOne(emailBD);
    return user;
  }
  catch {
    //обработка ошибок
  }
};
const email = '1';
findUser(email).then(console.log);

/*
1.2.2 Создание объявления
const advertisement = await Advertisement.create(data);
Аргумент data должны соответствовать полям модели Advertisement, кроме _id.

Результатом работы функции должен быть Promise, который резолвится с объектом модели Advertisement.
*/




const createAdvertisement = async (dataA) => {
  try{
    const AdvertisementModule = require('./connectingBD/index').Advertisement;
    const advertisement = await AdvertisementModule.create(dataA);
    return advertisement;
  }
  catch {
    //обработка ошибок
  }
};

const dataA = ({ 
shortText: '1',
description: '2',
images: ['3'],
userId: '4',
createdAt: new Date(),
updatedAt: new Date(),
tags: ['5'],
isDeleted: false,
});
createAdvertisement(dataA).then(console.log);

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
    const AdvertisementModule = require('./connectingBD/index').Advertisement;
    //const advertisements = await AdvertisementModule.find(params);
    //return advertisements;
    return params;
  }
  catch {
    //обработка ошибок
  }
};
const params = ({ 
  shortText:    '1',
  description:  '2',
  userId:       '4',
  tags:         ['5'],
  });
findAdvertisement(params).then(console.log);

/*
1.2.3 Удаление объявления
const advertisement = await Advertisement.remove(id);
Аргумент id должен быть типа string или ObjectId.

Функция поиска не должна удалять запись из БД, а только выставлять значение флага isDeleted = true.
*/
/*
const dataA1 = ({ 
  shortText: 'fff',
  description: 'ttt',
  images: ['3'],
  userId: '4',
  createdAt: new Date(),
  updatedAt: new Date(),
  tags: ['5','6'],
  isDeleted: false,
  })
  createAdvertisement(dataA1).then(console.log);
*/


























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`START_SERVER - PORT: ${PORT}`);
})