const express = require ('express');
const app = express();

/*
1.1.1 Функция "Создание пользователя"
const user = await UserModule.create(data);
Аргумент data должны соответствовать полям модели User, кроме _id.

Результатом работы функции должен быть Promise, который резолвится с объектом модели User.
*/

const createUser = require ('./01');
const data = ({ email:'1', passwordHash:'2', name:'3', contactPhone:'4'});
createUser(data).then(console.log);






























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`START_SERVER - PORT: ${PORT}`);
})