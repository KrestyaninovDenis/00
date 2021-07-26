/*
1.3 Модуль "Чат"
Модуль "чат" предназначается для хранения чатов и сообщений в чате.
Модуль объявлений используется функциональными модулями для реализации возможности общения пользователей.
Данные чатов должны храниться в MongoDB.
Модель данных чата Chat должна содержать следующие поля:

название	    тип	                    обязательное	    уникальное
_id	            ObjectId	            да	                да
users	        [ObjectId, ObjectId]	да	                нет
createdAt	    Date	                да	                нет
messages	    Message[]	            нет	                нет
*/

const {Schema, model} = require('mongoose');

const chatSchema = new Schema({
    users: {
        type: String, 
        required: true,
        default: "",   
    },
    createdAt: {
        type: Date, 
        required: true,
        default: "",   
    },    
    messages: {
        type: String,
        default: "",   
    },    
});

module.exports = chatSchema;
