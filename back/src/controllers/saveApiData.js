const axios = require('axios')
const {characterModel} = require('../database/index.js')

const getApiData = async () => {
    try {
        let allCharactersInfoApi = [];
        for (let i = 1; i < 6; i++) {
            const apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`);
            allCharactersInfoApi.push(apiData);
        }
        allCharactersInfoApi = await Promise.all(allCharactersInfoApi);
        let allCharactersInfoApi2 = allCharactersInfoApi.map(response => response.data.results.map(char=> {
            return {
                id: char.id,
                name: char.name,
                species:char.species,
                status:char.status,
                origin:char.origin.name,
                gender:char.gender,
                image:char.image
            }
        }))
        let allCharacters = allCharactersInfoApi2.flat();
        return allCharacters;
    } catch (error) {
        return { error: error.message }
    }
}

const saveApiData = async() => {
    try {
        const characterAll = await getApiData();
        await characterModel.bulkCreate(characterAll)
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = saveApiData;