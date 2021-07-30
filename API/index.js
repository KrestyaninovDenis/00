const express = require('express');
const router = express.Router();
const bd = require ('../connectingBD/BD-function');

router.post('/api/signup', async (req, res) => { 
    try {
        const createUser_END = await bd.createUser(req.body)
        res.status ('Ok');
        res.json ({data:createUser_END,status:'OK'});
    }
    catch {
        res.status ('error');
        res.json ({error:"email занят",status:'error'});
    }
});








module.exports = router;