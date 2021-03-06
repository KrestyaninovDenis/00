const mongoose          = require('mongoose');
const {Schema, model}   = require('mongoose');

const UserDB = process.env.DB_USERNAME || 'root';
const PassDB = process.env.DB_PASSWORD || 'qwerty12345';
const NameDB = 'User';
const HostDb = process.env.DB_HOST || 'mongodb://localhost:27017/';
        
const connect = mongoose.createConnection(HostDb, {
    user: UserDB,
    pass: PassDB,
    dbName: NameDB,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const schemes = require('../MODELS/index')
module.exports = connect.model('User', schemes.User);