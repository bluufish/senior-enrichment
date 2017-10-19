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
        defaultValue: 'https://myanimelist.cdn-dena.com/images/characters/14/173325.jpg'
    }
},
    {
        defaultScope: {
            include: [{ all: true }]
        }
    }
);