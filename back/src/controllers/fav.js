let favs = [];

const getFavs = (req, res) => {
  res.status(200).json(favs);
};

const postFavs = (req, res) => {
  favs.push(req.body);
  console.log("log de favoritos add", favs);
  res.status(200).json(req.body);
};

const deleteFavs = (req, res) => {
  const { id } = req.params;
  const character = favs.find((f) => f.id === Number(id));

  if (character) {

    favs = favs.filter(f => f !== character)
    console.log("log de favoritos delete", favs);
    res.status(200).json(character);
  } else {
    res.status(400).json({
      error: "not found this character",
    });
  }
};

module.exports = {
  getFavs,
  postFavs,
  deleteFavs,
};