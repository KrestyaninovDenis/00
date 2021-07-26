const express = require ('express');
const app = express();


const Book = require('./connectingBD/index');
//создаём 4 базы на пробу
(async () => {
  const newAdvertisement = new Book.Advertisement({ shortText:'1' });
  await newAdvertisement.save();
    const newChat = new Book.Chat({ users:'1' });
    await newChat.save();
      const newMessage = new Book.Message({ author:'1' });
      await newMessage.save();
})();
/*
async (req, res) => {
  const newTodo1 = new Book.Chat({
    users:'1',
    createdAt:'2'
  });
  try {
      await newTodo1.save();
      res.redirect('/book');
  } catch (e) {
      console.error(e);
  }
};
*/
//const BDs = require('./connectingBD/index')

//const BDadve = BDs.Advertisement;
//const BDchat = BDs.Chat;
//const BDmess = BDs.Message;
//const BDuser = BDs.User;

/*
1.1.1 Функция "Создание пользователя"
const user = await UserModule.create(data);
Аргумент data должны соответствовать полям модели User, кроме _id.

Результатом работы функции должен быть Promise, который резолвится с объектом модели User.
*/

const fff = (async (req, res) => {
  try{
    const data = ({ email:'1' })
    const UserModule = require('./connectingBD/index').User;
    const user = await UserModule.create(data);
    console.log(user);
    return (data);
  }
  catch {
    //обработка ошибок
  }
})();
console.log (fff);

/*
1.1.2 Функция "Поиск пользователя по email"
const user = await UserModule.findByEmail(email);
Аргумент email должен быть строкой.

Результатом работы функции должен быть Promise, который резолвится объектом модели User или null, 
если пользователь не существует.
*/
/*
const user = await User.findByEmail({ email });
if (!user) {
 console.log('USER DOES NOT EXIST');
}
*/

/*
2.1 Регистрация
POST /api/signup — зарегистрироваться

Пароль не должен храниться в чистом виде. Его перед отправкой в модуль "Пользователи" нужно хешировать.

Формат данных при отправке json-объект. Пример запроса:

{
  "email": "kulagin@netology.ru",
  "password": "ad service",
  "name": "Alex Kulagin",
  "contactPhone": "+7 123 456 78 90"
}
В ответ приходит либо сообщение об ошибке, либо JSON-объект с данными:

{
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "email": "kulagin@netology.ru",
    "name": "Alex Kulagin",
    "contactPhone": "+7 123 456 78 90"
  },
  "status": "ok"
}
{
  "error": "email занят",
  "status": "error"
}
2.2 Аутентификация
POST /api/signin — залогиниться
*/



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`START_SERVER - PORT: ${PORT}`);
})