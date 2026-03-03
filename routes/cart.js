const express = require("express");
const router = express.Router();

const controller = require("../controllers/cartController");

router.post("/", controller.addToCart);
router.get("/", controller.getCart);

module.exports = router;