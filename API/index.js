const express = require('express');
const router = express.Router();



router.get('/api/signup', async (req, res) => {});

router.post('/api/signup', async (req, res) => {

    const createUser = require ('../connectingBD/BD-function').createUser;
    const data = req.body;
    createUser(data).then(console.log);
    });

module.exports = router;