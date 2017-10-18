// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require("bluebird");
const {
  db,
  Campus,
  Student,
} = require('./db/models');

const data = {
  campus: [
    {
      name: 'Kitauji'
    },
    {
      name: 'Chuu2 School'
    },
    {
      name: 'Tamako Market School'
    },
    {
      name: 'Hyouka School'
    }
  ],
  student: [
    {
      name: 'Oumae Kumiko',
      email: 'Hibike1@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/3/279997.jpg',
      campusId: 1
    },
    {
      name: 'Katou Hazuki',
      email: 'Hibike2@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/2/280573.jpg',
      campusId: 1
    },
    {
      name: 'Kawashima Sapphire',
      email: 'Hibike3@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/6/279998.jpg',
      campusId: 1
    },
    {
      name: 'Kousaka Reina',
      email: 'Hibike4@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/16/317352.jpg',
      campusId: 1
    },
    {
      name: 'Rikka Takanashi',
      email: 'Chuu21@gmail.com',
      campusId: 2,
      image: 'https://myanimelist.cdn-dena.com/images/characters/13/174473.jpg'
    },
    {
      name: 'Nibutani Shinka',
      email: 'Chuu22@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/2/254697.jpg',
      campusId: 2
    },
    {
      name: 'Sanae Dekomori',
      email: 'Chuu23@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/16/194961.jpg',
      campusId: 2
    },
    {
      name: 'Tsuyuri Kumin',
      email: 'Chuu24@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/11/175723.jpg',
      campusId: 2
    },
    {
      name: 'Kitashirakawa Tamako',
      email: 'TamakoMarket1@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/11/188208.jpg',
      campusId: 3
    },
    {
      name: 'Makino Kanna',
      email: 'TamakoMarket2@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/12/191850.jpg',
      campusId: 3
    },
    {
      name: 'Tokiwa Midori',
      email: 'TamakoMarket3@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/9/190578.jpg',
      campusId: 3
    },
    {
      name: 'Asagiri Shiori',
      email: 'TamakoMarket4@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/13/299190.jpg',
      campusId: 3
    },
    {
      name: 'Mochimazzi Choi',
      email: 'TamakoMarket5@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/6/196819.jpg',
      campusId: 3
    },
    {
      name: 'Houtarou Oreki',
      email: 'Hyouka1@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/15/165623.jpg',
      campusId: 4
    },
    {
      name: 'Eru Chitanda',
      email: 'Hyouka2@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/7/165629.jpg',
      campusId: 4
    },
    {
      name: 'Fukube Satoshi',
      email: 'Hyouka3@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/8/171455.jpg',
      campusId: 4
    },
    {
      name: 'Ibara Mayaka',
      email: 'Hyouka4@gmail.com',
      image: 'https://myanimelist.cdn-dena.com/images/characters/16/328959.jpg',
      campusId: 4
    }
  ],
}

db
  .sync({ force: true })
  .then(function () {
    console.log("Dropped old data, now inserting data");
    return Promise.map(Object.keys(data), function (name) {
      return Promise.map(data[name], function (item) {
        return db.model(name).create(item);
      });
    });
  })
  .then(function () {
    console.log("Finished inserting data");
  })
  .catch(function (err) {
    console.error("There was totally a problem", err, err.stack);
  })
  .finally(function () {
    db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log("connection closed"); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
