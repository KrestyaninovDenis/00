const express = require ('express');
const app = express();

const BDs = require('./connectingBD/index')

const BDadve = BDs.Advertisement;
const BDchat = BDs.Chat;
const BDmess = BDs.Message;
const BDuser = BDs.User;

/*
1.1.1 Функция "Создание пользователя"
const user = await UserModule.create(data);
Аргумент data должны соответствовать полям модели User, кроме _id.

Результатом работы функции должен быть Promise, который резолвится с объектом модели User.
*/

async (req, res) => {
    const data = new BDuser ({
        email           : 'email',
        passwordHash    : 'passwordHash',
        name            : 'name',
        contactPhone    : 'contactPhone',
    });
    const UserModule = BDuser;
    try {
        const user = await UserModule.create(data);
        console.log(user);
    }
    catch (e) {
        console.error(e);
    }
};

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