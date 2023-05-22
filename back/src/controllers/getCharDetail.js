// const axios = require ("axios");

// const getCharDetail = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         let character = {
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species,
//             status: data.status,
//             origin: data.origin.name
//         }
//         res.writeHead(200,{"Contente-type": "application/json"})
//         .end(JSON.stringify(character))
//     })
//     .catch(err => res.writeHead(500,{"Content-type": "text/plain"})
//     .end(`El personaje con id:${id} no fue encontrado`)
//     )
// }

// module.exports = getCharDetail;

const axios = require('axios')
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharDetail = async (req, res) => {
    try {
        const {detailId} = req.params
        let result = await axios(URL + detailId);
        let { data } = result;
        let character = {
            name : data.name,
            image: data.image,
            id: data.id,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin
        }
        res.status(200);
        res.json(character)
    } catch (err) {
        res.status(500)
        res.json({ message: err.message})
    }
}

module.exports = getCharDetail;