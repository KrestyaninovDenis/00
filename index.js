const express = require ('express');
const app = express();

const bd = require ('./01');


const data = ({ email:'1', passwordHash:'2', name:'3', contactPhone:'4'});
bd.createUser(data).then(
  result => console.log(result), 
  error => console.log(error) 
);


const email = '1';
bd.findUser(email).then(console.log);


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
bd.createAdvertisement(dataA).then(console.log);


  const params = ({ 
    shortText:    '1',
    description:  '2',
    userId:       '4',
    tags:         ['5','6'],
    });
bd.findAdvertisement(params).then(console.log);


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
bd.createAdvertisement(dataA2).then(console.log);


  const id = ({
    //  _id:    'xxx',  //ищем по _id
      description:  '2', //для пробы первое совпадение
    });
bd.find_id_Advertisement(id).then(console.log);


















const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`START_SERVER - PORT: ${PORT}`);
})