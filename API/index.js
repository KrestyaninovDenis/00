const express = require('express');
const router = express.Router();



router.get('/api/signup', (req, res) => {
/*    
    const {books} = stor;
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body;
    const newBook = new Book(title, description, authors, favorite, fileCover, fileName, fileBook);
    books.push(newBook);
    res.status(201);
    res.json(newBook);
*/

const createUser = require ('../connectingBD/BD-function').createUser;
const data = ({ email:'1', passwordHash:'2', name:'3', contactPhone:'4'});
createUser(data).then(
    result => console.log(result), 
    error => console.log(error) 
  );
});


module.exports = router;