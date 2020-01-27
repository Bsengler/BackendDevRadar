const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], // [] - já entende que armazena varias strings, ou seja, que é um array
    location: {
        type: PointSchema,
        index : '2dsphere' // o "indice" facilita depois a busca // o código 2dsphere é utilizado quando é um ponto de latitude e longitude
    }
});

module.exports = mongoose.model('Dev', DevSchema);