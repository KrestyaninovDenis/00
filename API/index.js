const express = require('express');
const router = express.Router();



router.get('/api/signup', async (req, res) => {

const createUser = require ('../connectingBD/BD-function').createUser;
const data = ({ email:'11', passwordHash:'21', name:'31', contactPhone:'41'});
createUser(data).then(res.status(201));
});


module.exports = router;