/*
1.2 Модуль "Объявления"
Модуль пользователи предназначается для хранения и поиска объявлений.
Модуль объявлений используется функциональными модулями для показа 
списка объявлений для размещения и удаления объявлений.
Данные объявлений должны храниться в MongoDb.
Модель данных объявления Advertisement должна содержать следующие поля:

название	    тип	        обязательное	уникальное
_id	            ObjectId	да	            да
shortText	    string	    да	            нет
description	    string	    нет	            нет
images	        string[]	нет	            нет
userId	        ObjectId	да	            нет
createdAt	    Date	    да	            нет
updatedAt	    Date	    да	            нет
tags	        string[]	нет	            нет
isDeleted	    boolean	    да	            нет
*/

const {Schema, model} = require('mongoose');

const advertisementSchema = new Schema({
    shortText: {
        type: String, 
    //    required: true,
        default: "",   
    },
    description: {
        type: String, 
        default: "",   
    },    
    images: {
        type: [String], 
        default: [""], 
    },
    userId: {
        type: String, 
    //    required: true,
        default: "", 
    },
    createdAt: {
        type: Date, 
    //    required: true,
        default: Date,   
    },
    updatedAt: {
        type: Date,  
    //    required: true,
        default: Date,   
    },    
    tags: {
        type: String,
        default: "",   
    },    
    isDeleted: {
        type: Boolean, 
    //    required: true,
        default: false,   
    },
});

module.exports = advertisementSchema;
