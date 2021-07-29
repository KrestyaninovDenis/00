const express = require('express');
const router = express.Router();
const bd = require ('../connectingBD/BD-function');

router.post('/api/signup', async (req, res) => { 
    try{
const createUser_END = await bd.createUser(req.body)
res.json ({data:createUser_END,status:'OK'});

    }
    catch {
        console.log("User profile not found") 
    }
});










module.exports = router;