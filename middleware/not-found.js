const notFound = (req, res) => {
  return res.status(404).send("The Route doesn't exists");
};

module.exports = notFound;
