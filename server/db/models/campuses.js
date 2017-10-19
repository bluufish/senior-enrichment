const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: 'https://i.imgur.com/ixa1EFT.png'
    }
}
)