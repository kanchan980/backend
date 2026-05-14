const express = require("express");

const router = express.Router();

const verifyToken =
  require("../middleware/authMiddleware");

const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get(
  "/",
  verifyToken,
  getProducts
);

router.post(
  "/",
  verifyToken,
  addProduct
);

router.put(
  "/:id",
  verifyToken,
  updateProduct
);

router.delete(
  "/:id",
  verifyToken,
  deleteProduct
);

module.exports = router;