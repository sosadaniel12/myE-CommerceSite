const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers"); // Import the product controller

//GET all products from the db
//GET /api/products
//Public//
router.get("/", getAllProducts);

//GET a single product from the db by id
//GET /api/products/:id
//Public//
router.get("/:id", getProductById);

module.exports = router;
