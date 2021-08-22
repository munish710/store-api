const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { typ: String, requred: [true, "Product Name must be provided"] },
  price: { typ: Number, requred: [true, "Product price must be provided"] },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
    // enum: ["ikea", "liddy", "caressa", "marcos"],
  },
});

module.exports = mongoose.model("Product", productSchema);
