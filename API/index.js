const express = require('express');
const router = express.Router();
const bd = require ('../connectingBD/BD-function');

router.post('/api/signup', async (req, res) => { 
    try{
const createUser_END = await bd.createUser(req.body)

const rrr = {data:createUser_END,status:'OK'}
res.json (rrr);
    }
    catch {
        res.json ('email занят');  
    }
});










module.exports = router;