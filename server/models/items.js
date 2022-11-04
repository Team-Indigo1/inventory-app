const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')



const allItems = sequelize.define('items', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.INTEGER,
    category: Sequelize.STRING,
    image: Sequelize.STRING


})