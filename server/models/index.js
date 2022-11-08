const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

const Items = sequelize.define('items', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  category: Sequelize.STRING,
  image: Sequelize.STRING
})

const Users = sequelize.define('users', {
  name: Sequelize.STRING,
  password: Sequelize.STRING
})

// const Cart = sequelize.define('cart', {
//   name: Sequelize.STRING,
//   password: Sequelize.STRING
// })


module.exports = {
  db: sequelize,
  Sauce,
  Items,
  Users
};
