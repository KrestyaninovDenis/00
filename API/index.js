const express = require('express');
const router = express.Router();


router.post('/api/signup', async (req, res) => {
    const {email, passwordHash, name, contactPhone} = req.body;

    const Book = require ('../connectingBD/MODELS/index').createUser;
    const data = new Book({
        email, passwordHash, name, contactPhone
    });

    const createUser = require ('../connectingBD/BD-function').createUser;
    createUser(data).then(console.log);
    });

module.exports = router;