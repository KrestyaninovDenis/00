/*
1.3 Модуль "Чат"
Модуль "чат" предназначается для хранения чатов и сообщений в чате.
Модуль объявлений используется функциональными модулями для реализации возможности общения пользователей.
Данные чатов должны храниться в MongoDB.
Модель сообщения Message должна содержать следующие поля:

название	    тип	        обязательное	уникальное
_id	            ObjectId	да	            да
author	        ObjectId	да	            нет
sentAt	        Date	    да	            нет
text	        string	    да	            нет
readAt	        Date	    нет	            нет

Сообщение считается прочитанным, когда поле readAt не пустое.
*/

const {Schema, model} = require('mongoose');

const messageSchema = new Schema({
    author: {
        type: ObjectID, 
        required: true,
        default: "",   
    },
    sentAt: {
        type: Date, 
        required: true,
        default: "",   
    },    
    text: {
        type: String,
        required: true,
        default: "",   
    },  
    readAt: {
        type: Date,
        default: "",   
    },   
});

module.exports = messageSchema;