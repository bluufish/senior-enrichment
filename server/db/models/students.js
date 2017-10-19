const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: 'https://i.imgur.com/CXItI2O.png'
    }
},
    {
        defaultScope: {
            include: [{ all: true }]
        }
    }
);