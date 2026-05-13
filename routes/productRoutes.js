const express = require("express");

const router = express.Router();

const {
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getProducts);
router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;