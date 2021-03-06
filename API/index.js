const express   = require('express');
const router    = express.Router();
const bd        = require ('../connectingBD/BD-function');
const passport  = require('passport');

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
        req.login(user, function(err) {
            res.status (200);
            res.json ({data:user,status:'OK'});
        })
    })(req, res, next);
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
        res.json ({error:"ошибка поиска",status:'error'});
    }
});
// Поиск объявления по ID (для всех)
router.get('/api/advertisements/:id', async (req, res) => {
    try {
        const ADV = await bd.findAdvertisement( {_id:req.params.id} )
        res.status (200);
        res.json ({data:ADV,status:'OK'});
    }
    catch {
        res.status (404);
        res.json ({error:"ошибка поиска по ID",status:'error'});
    }
});
// Редактирование объявления (проверка хозяина объявления)
router.post('/api/advertisements/:id', async (req, res) => {
    try {
        if (req.isAuthenticated && req.isAuthenticated()) {
            const ACON = require('../connectingBD/CONNECT/index').Advertisement;
            const ADV = await ACON.findOne( {_id:req.params.id} )
                if (ADV.userId == req.user._id) {
                    const ACON = require('../connectingBD/CONNECT/index').Advertisement;
                    const createA = await ACON.findOneAndUpdate( {_id:req.params.id} , req.body, {new: true}, function(err, result){
                    if(err) return console.log(err);
                    return result
                    });
                    res.status (200);
                    res.json ({data:createA,status:'OK'});
                }
                else { 
                    res.json ('создал не этот пользователь'); 
                }
        }
        else { 
            res.json ('нужна идентификация'); 
        }
    }
    catch {
        res.status (404);
        res.json ({error:"ошибка редактирования",status:'error'});
    }
});
// Создание объявления (для идентифицированных)
router.post('/api/advertisements', async (req, res) => {
    try {
        if (req.isAuthenticated && req.isAuthenticated()) {
            req.body.userId = req.user._id
            const createADV = await bd.createAdvertisement(req.body)
            res.status (200);
            res.json (createADV);
        }
        else { res.json ('нужна идентификация'); }
    }
    catch {
        res.status (404);
        res.json ("ошибка создания объявления");
    }
});
// Удаление объявления (проверка хозяина объявления)
router.post('/api/delete/:id', async (req, res) => {
    try {
        if (req.isAuthenticated && req.isAuthenticated()) {
            const ACON = require('../connectingBD/CONNECT/index').Advertisement;
            const ADV = await ACON.findOne( {_id:req.params.id} )
                if (ADV.userId == req.user._id) {
                    const ACON = require('../connectingBD/CONNECT/index').Advertisement;
                    const createA = await ACON.findOneAndUpdate( {_id:req.params.id} , { isDeleted:true }, {new: true}, function(err, result){
                    if(err) return console.log(err);
                    return result
                    });
                    res.status (200);
                    res.json ({data:createA,status:'OK'});
                }
                else { 
                    res.json ('создал не этот пользователь'); 
                }
        }
        else { 
            res.json ('нужна идентификация'); 
        }
    }
    catch {
        res.status (404);
        res.json ({error:"ошибка редактирования",status:'error'});
    }
});







module.exports = router;