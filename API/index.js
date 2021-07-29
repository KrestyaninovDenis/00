const express = require('express');
const router = express.Router();
const bd = require ('../connectingBD/BD-function');

router.post('/api/signup', async (req, res) => { 
    try{
const createUser_END = await bd.createUser(req.body)
if (!Object.keys(createUser_END).length) {
res.json ({data:createUser_END,status:'OK'});
}
else 
{
res.json ({error:'email занят',status:'error'}); 
}
    }
    catch {
    }
});










module.exports = router;