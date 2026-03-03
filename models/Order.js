const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  totalAmount: Number
});

module.exports = mongoose.model("Order", orderSchema);