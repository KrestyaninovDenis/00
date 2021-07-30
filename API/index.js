const express = require('express');
const router = express.Router();
const bd = require ('../connectingBD/BD-function');
const passport = require('passport');
const User = require('../connectingBD/CONNECT/User')

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
router.post('/api/signin', 
    passport.authenticate('local', {    successRedirect: '/1',
                                        failureRedirect: '/2',
                                    })
);








module.exports = router;