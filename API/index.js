const express = require('express');
const router = express.Router();




router.get('/api/signup', async (req, res) => {
    const aaa = req;
    res.status(555)
});

router.post('/api/signup', async (req, res) => {
    const {email, passwordHash, name, contactPhone} = req.body;

    const Book = require ('../connectingBD/MODELS/index').User;
    const data = new Book({
        email, passwordHash, name, contactPhone
    });

    const createUser = require ('../connectingBD/BD-function').createUser;
    createUser(data).then(res.status(555));
    });

module.exports = router;