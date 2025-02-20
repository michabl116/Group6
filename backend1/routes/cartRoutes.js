const express = require("express");
const { getCartItems, addCartItem } = require("../controllers/cartController");

const router = express.Router();

router.get("/cart", getCartItems);
router.post("/cart", addCartItem);

module.exports = router;
