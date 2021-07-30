const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const bd = require ('./connectingBD/BD-function');







//__________________________________________________________________________________________________

const User = require('./connectingBD/CONNECT/User')
const passport       = require('passport');
const LocalStrategy  = require('passport-local').Strategy;

passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwordHash',
    passReqToCallback : false
  },
  
  function(email, passwordHash, done){
      const emailBD = ({ email:email })
      const UserModule = require('./connectingBD/CONNECT/index').User;
      const user = UserModule.findOne(emailBD);
    if (!user) { return done(null, false) } //ничего не нашёл
    else if (passwordHash !== user.passwordHash) { return done(null, false); } //неверный пароль
    else { return done(null, user) }
    }
));



passport.serializeUser(function (user, cb) {
    cb(null, user._id)
})
passport.deserializeUser(function (_id, cb) {
    User.findById(_id, function (err, user) {
      if (err) { return cb(err) }
      cb(null, user)
    })
})

app.use(require('express-session')({
    secret: "SECRET",
    resave: false,
    saveUninitialized: false,
}))
  
app.use(passport.initialize())
app.use(passport.session()) 
  
//_________________________________________________________________________________________________


const indexRouter = require('./API/index');
app.use('/', indexRouter);











/*
const data = ({ email:'1', passwordHash:'2', name:'3', contactPhone:'4'});
bd.createUser(data).then(
  result => console.log(result)
);
//
const email = '1';
bd.findUser(email).then(console.log);
//
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
//
  const params = ({ 
    shortText:    '1',
    description:  '2',
    userId:       '4',
    tags:         ['5','6'],
    });
bd.findAdvertisement(params).then(console.log);
//
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
//
  const id = ({
    //  _id:    'xxx',  //ищем по _id
      description:  '2', //для пробы первое совпадение
    });
bd.find_id_Advertisement(id).then(console.log);
*/

















const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`START_SERVER - PORT: ${PORT}`);
})