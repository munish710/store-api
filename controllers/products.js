const getAllProductsStatic = async (req, res, next) => {
  throw new Error("Hello, testing express-aync-errors");

  return res.status(200).json({ msg: "product testing route" });
};

const getAllProducts = async (req, res) => {
  return res.status(200).json({ msg: "product route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
