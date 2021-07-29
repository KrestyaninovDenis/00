const express = require('express');
const router = express.Router();


router.get('/api/signup', async (req, res) => {
    const aaa = req;
    res.status(555)
});

router.post('/api/signup', async (req, res) => {
    console.log(req.body)

res.status(555);
});

module.exports = router;