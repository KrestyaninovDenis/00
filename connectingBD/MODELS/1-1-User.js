/*
1.1 Модуль "Пользователи"
Модуль пользователи предназначается для создания, хранения и поиска профилей пользователей.
Модуль пользователи используется функциональными модулями для регистрации и аутентификации.
Данные пользователя должны храниться в MongoDB.
Модель данных User пользователя должна содержать следующие поля:

название	    тип	        обязательное	    уникальное
_id	            ObjectId	да	                да
email	        string	    да	                да
passwordHash	string	    да	                нет
name	        string	    да	                нет
contactPhone	string	    нет	                нет
*/

const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String, 
        required: true,
        unique: true,
        default: "",   
    },
    passwordHash: {
        type: String, 
        required: true,
        select: false,
        default: "",   
    },    
    name: {
        type: String,
        required: true,
        default: "",   
    },    
    contactPhone: {
        type: String, 
        default: "",   
    },
});

module.exports = userSchema;
