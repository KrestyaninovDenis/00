const express = require('express');
const router = express.Router();
const bd = require ('../connectingBD/BD-function');
const passport = require('passport');

// Регистрация пользователя
router.post('/api/signup', async (req, res) => { 
    try {
        const createUser_END = await bd.createUser(req.body)
        res.status (200);
        res.json ({data:createUser_END,status:'OK'});
    }
    catch {
        res.status (404);
        res.json ({error:"email занят",status:'error'});
    }
});
// Аутентификация
router.post('/api/signin', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
        if (err) { return next(err); }
        if (!user) { 
            res.status (404);
            res.json ({error:"Неверный логин или пароль",status:'error'});
            return res;
        }
        //req.login(user, next);
        res.status (200);
        res.json ({data:user,status:'OK'})
    })(req, res, next);
});
// Создание объявления
router.post('/api/advertisements', async (req, res) => {
    try {
        const createADV = await bd.createAdvertisement(req.body)
        res.status (200);
        res.json (createADV);
    }
    catch {
        res.status (404);
        res.json ("ошибка создания объявления");
    }
});
// Поиск объявления (для всех)
router.get('/api/advertisements', async (req, res) => {
    try {
        const ADV = await bd.findAdvertisement(req.body)
        res.status (200);
        res.json ({data:ADV,status:'OK'});
    }
    catch {
        res.status (404);
        res.json ({error:"email занят",status:'error'});
    }
});
// Поиск объявления (для всех)
router.get('/api/advertisements/:id', async (req, res) => {
    try {
        const ADV = await bd.findAdvertisement(req.params)
        res.status (200);
        res.json ({data:ADV,status:'OK'});
    }
    catch {
        res.status (404);
        res.json ({error:"email занят",status:'error'});
    }
});




module.exports = router;