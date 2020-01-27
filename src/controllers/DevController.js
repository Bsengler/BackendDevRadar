const axios = require('axios');

const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, updatem destroy

module.exports = { 
    async index(request, response){
        const devs = await Dev.find(); // await, quando a consulta é demorada

        return response.json(devs);
    },


    async store (request, response) {
        const { github_username, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne({ github_username }); //irá até a tabela de devs e irá verificar pleo user name se ja existe um usuario assim

        if (!Dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const { name = login, avatar_url, bio} = apiResponse.data;
            
            const techsArray = parseStringAsArray(techs);
    
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs : techsArray,
                location
            });
    
        } 
      

        return response.json(dev); // send envia texto com respostas

    }
};