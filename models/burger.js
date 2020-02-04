
const Sequelize = require('sequelize');
const sqlzConnect = require('../config/connection.js');

//Creating a burgur model
let Burger = sqlzConnect.define("burger", {
    burger_name: Sequelize.STRING,
    devoured: {
        type: Sequelize.BOOLEAN,
        default: 0
    }
});
//Syncs to DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;