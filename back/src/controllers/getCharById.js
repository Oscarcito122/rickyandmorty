// const axios = require ("axios");

// const getCharById = (res, id) => {
//      axios(`https://rickandmortyapi.com/api/character/${id}`)
//      .then(response => response.data)
//      .then(data => {
//          let character = {
//              id: data.id,
//              name: data.name,
//              image: data.image,
//              gender: data.gender,
//              species: data.species
//          }
//          res.writeHead(200,{"Contente-type": "application/json"})
//          .end(JSON.stringify(character))
//      })
//      .catch(err => res.writeHead(500,{"Content-type": "text/plain"})
//      .end(`El personaje con id:${id} no fue encontrado`)
//      )
// }


// module.exports = getCharById;

const axios = require("axios");
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req, res) => {
    const {id} = req.params;
  try {
    let result = await axios(URL + id)
    const { data } = result;
            let character = {
                name : data.name,
                image: data.image,
                id: data.id,
                gender: data.gender,
                species: data.species
            }
            res.status(200)
            res.json(character)
        
    } catch (err) {
        res.status(500)
        res.json({message: err.message})
    }
};

module.exports = getCharById;