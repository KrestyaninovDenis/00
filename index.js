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
const data = ({ email:'1', passwordHash:'2', name:'3', contactPhone:'4'})
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
const email = '1'
findUser(email).then(console.log);

/*
1.2.2 Создание объявления
const advertisement = await Advertisement.create(data);
Аргумент data должны соответствовать полям модели Advertisement, кроме _id.

Результатом работы функции должен быть Promise, который резолвится с объектом модели Advertisement.
*/

const createAdvertisement = async (data) => {
  try{
    const AdvertisementModule = require('./connectingBD/index').Advertisement;
    const advertisement = await AdvertisementModule.create(data);
    return advertisement;
  }
  catch {
    //обработка ошибок
  }
};
const dataA = ({ 
/*
название	    тип	        обязательное	  уникальное
shortText	    string	    да	            нет
description	  string	    нет	            нет
images	      string[]	  нет	            нет
userId	      ObjectId	  да	            нет
createdAt	    Date	      да	            нет
updatedAt	    Date	      да	            нет
tags	        string[]	  нет	            нет
isDeleted	    boolean	    да	            нет
*/
shortText: '1',
description: '2',
images: '3',
userId: '4',
createdAt: Date,
updatedAt: Date,
tags: '5',
isDeleted: false,
})
createAdvertisement(dataA).then(console.log);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`START_SERVER - PORT: ${PORT}`);
})