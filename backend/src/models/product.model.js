const Sequelize = require('sequelize');
const { sequelize } = require('../utils/database.util');
const { asString, asNonNegativeInt, asOneOf } = require('../utils/model-types.util');
const { directions } = require('../utils/variables.util');




const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    ...asString(1, 255)
  },
  category: {
    ...asOneOf('canhochungcu', ['canhochungcu', 'nhao', 'dat', 'vanphong', 'matbangkinhdoanh', 'phongtro'])
  },
  type: {
    ...asOneOf('muaban', ['muaban', 'chothue', 'duan'])
  },
  price: {
    type: Sequelize.DOUBLE.UNSIGNED,
    allowNull: false
  },
  address: {
    ...asString(0, 255)
  },
  title: {
    ...asString(0, 255)
  },
  imageUrl: {
    ...asString(0, 2048, false)
  },
  description: {
    ...asString(0, 255)
  },
  isVerified: {
    type: Sequelize.BOOLEAN
  },
  area: {
    ...asNonNegativeInt()
  },
  numBedrooms: {
    ...asNonNegativeInt()
  },
  numBathrooms: {
    ...asNonNegativeInt()
  },
  mainDoorDirection: {
    ...asOneOf('', directions)
  },
  balconDirection: {
    ...asOneOf('', directions)
  },
  hasLegalDocs: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  deposit: {
    ...asNonNegativeInt()
  },

}, {
  freezeTableName: true
});


module.exports = Product;