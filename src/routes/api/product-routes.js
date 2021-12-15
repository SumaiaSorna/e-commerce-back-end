const { Router } = require("express");
const {
  getAllProducts,
  getProductById,
  createProducts,
  updateProductById,
  deleteProductById,
} = require("../../controllers/api/product");

const { Product, Category, Tag, ProductTag } = require("../../models");

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.post("/", createProducts);

router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);

module.exports = router;
