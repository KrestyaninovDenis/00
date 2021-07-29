const express = require('express');
const router = express.Router();
const bd = require ('../connectingBD/BD-function');

router.post('/api/signup', async (req, res) => {

    
  const r555 = await bd.createUser(req.body)

    res.json (r555);
    res.status(555);
});

module.exports = router;