const express = require('express');
const router = express.Router();
const bd = require ('../connectingBD/BD-function');

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








module.exports = router;