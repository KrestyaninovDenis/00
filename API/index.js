const express = require('express');
const router = express.Router();
const bd = require ('../connectingBD/BD-function');

router.post('/api/signup', async (req, res) => { 
    try{
const createUser_END = await bd.createUser(req.body)

if (Object.keys(createUser_END).length == 0) {
    res.json ({error:'email занят',status:'error'});
}
else{
    res.json ({data:createUser_END,status:'OK'});
}

    }
    catch {}
});









module.exports = router;