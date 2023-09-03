const Sequelize = require('sequelize');
const { databaseName } = require('./variables.util');


function getMagicMethods(model) {
  for (let assoc of Object.keys(model.associations)) {
    for (let accessor of Object.keys(model.associations[assoc].accessors)) {
      console.log(model.name + '.' + model.associations[assoc].accessors[accessor]+'()');
    }
  }
}


const sequelize = new Sequelize(
  databaseName, 'root', '123321',
  {
    dialect: 'mysql',
    host: process.env.NODE_ENV === 'prod'? process.env.MYSQL_HOST: 'localhost',
    sync: true,
    dialectOptions: {
      // useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: true,
      timezone: "+05:30"
    },
    timezone: "+05:30", //for writing to database
  }
);


sequelize.authenticate().then(() => {
  console.log('connected to mysql');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


module.exports = {
  sequelize, 
  getMagicMethods,
};
