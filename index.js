const express = require ('express');
const app = express();

const bd = require ('./01');

//const createUser = require ('./01').createUser;
const data = ({ email:'1', passwordHash:'2', name:'3', contactPhone:'4'});
const data_00 = bd.createUser(data).then();
/*
  result => console.log(result), 
  error => console.log(error) 
);
*/
console.log(data_00);

const findUser = require ('./01').findUser;
const email = '1';
findUser(email).then(console.log);


const createAdvertisement = require ('./01').createAdvertisement;
const dataA = ({ 
  shortText: '11111',
  description: '22222',
  images: ['3'],
  userId: '4',
  createdAt: new Date(),
  updatedAt: new Date(),
  tags: ['5','6'],
  isDeleted: false,
  });
createAdvertisement(dataA).then(console.log);


const findAdvertisement = require ('./01').findAdvertisement;
  const params = ({ 
    shortText:    '1',
    description:  '2',
    userId:       '4',
    tags:         ['5','6'],
    });
findAdvertisement(params).then(console.log);


//объект на пробу
const dataA2 = ({ 
  shortText: '11111',
  description: '2',
  images: ['3'],
  userId: '4',
  createdAt: new Date(),
  updatedAt: new Date(),
  tags: ['5','6'],
  isDeleted: false,
  });
createAdvertisement(dataA2).then(console.log);


const find_id_Advertisement = require ('./01').find_id_Advertisement;
  const id = ({
    //  _id:    'xxx',  //ищем по _id
      description:  '2', //для пробы первое совпадение
    });
find_id_Advertisement(id).then(console.log);


















const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`START_SERVER - PORT: ${PORT}`);
})