//  app = require ("../server");


// app.listen(3001,() => {
//      console.log('Server on port 3001');
//  })
const { Router } = require("express");
const router = Router();

//CONTROLLERS
const getCharById = require('../controllers/getCharById.js');
const getCharDetail = require('../controllers/getCharDetail.js');
const {getFavs, postFavs, deleteFavs}= require("../controllers/fav");
const getAllChars = require('../controllers/getAllChars.js');




router.get('/rickandmorty/onsearch/:id', getCharById);
router.get('/rickandmorty/detail/:detailId', getCharDetail);
router.get('/rickandmorty/fav', getFavs)
router.post('/rickandmorty/fav', postFavs)
router.delete('/rickandmorty/fav/:id', deleteFavs)
router.get('/allCharacters', getAllChars)


module.exports = router;