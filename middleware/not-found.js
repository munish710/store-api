const notFound = (req, res) => {
  res.status(404).send("The Route doesn't exists");
};

module.exports = notFound;
