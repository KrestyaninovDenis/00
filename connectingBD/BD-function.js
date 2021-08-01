const bcrypt    = require('bcrypt');


const createUser = async (data) => {
    try {
        data.passwordHash = await bcrypt.hashSync(data.passwordHash, bcrypt.genSaltSync(10));            
        const UserModule = require('./CONNECT/index').User;
        const user = await UserModule.create(data);
        return user;
    }
    catch (err) {
        throw err;
    }
  };


  const findUser = async (email) => {
    try{
      const emailBD = ({ email:email })
      const UserModule = require('./CONNECT/index').User;
      const user = await UserModule.findOne(emailBD);
      return user;
    }
    catch {
      //обработка ошибок
    }
  };


const createAdvertisement = async (dataA) => {
    try{
      const AdvertisementModule = require('./CONNECT/index').Advertisement;
      const advertisement = await AdvertisementModule.create(dataA);
      return advertisement;
    }
    catch {
      //обработка ошибок
    }
  };

const findAdvertisement = async (params) => {
    try{
      params.shortText = {$regex: params.shortText};
      params.description = {$regex: params.description};
      params.isDeleted = false;
      const AdvertisementModule = require('./CONNECT/index').Advertisement;
      const advertisements = await AdvertisementModule.find(params);
      return advertisements;
    }
    catch {
      //обработка ошибок
    }
  };


  const find_id_Advertisement = async (id) => {
    try{
      const AdvertisementModule = require('./CONNECT/index').Advertisement;
      const advertisements = await AdvertisementModule.findOneAndUpdate(id,{ $set: {isDeleted: true}}, {returnOriginal: false},);
      return advertisements;
    }
    catch {
      //обработка ошибок
    }
  };
//------------------------------------------------------------------------------------------------------------

  module.exports = {createUser, findUser, createAdvertisement, findAdvertisement, find_id_Advertisement};