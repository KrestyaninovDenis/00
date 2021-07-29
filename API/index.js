const express = require('express');
const router = express.Router();
const bd = require ('../connectingBD/BD-function');

router.post('/api/signup', async (req, res) => { 
    try{
const createUser_END = await bd.createUser(req.body)

for (let key in createUser_END) {
    res.json ({error:'email занят',status:'error'});
    }
    res.json ({data:createUser_END,status:'OK'});
    }
    catch {}
});










module.exports = router;