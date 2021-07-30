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
    passport.authenticate('local'), function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        //res.redirect('/users/' + req.user.username);
        res.json (req.user)
      });








module.exports = router;