const { Router } = require("express");
const {
  getAllCatagories,
  getCatagoriesById,
  createCatagories,
  updateCatagoriesById,
  deleteCatagoriesById,
} = require("../../controllers/api/catagories");

const { Category, Product } = require("../../models");

const router = Router();

router.get("/", getAllCatagories);
router.get("/:id", getCatagoriesById);

router.post("/", createCatagories);

router.put("/:id", updateCatagoriesById);
router.delete("/:id", deleteCatagoriesById);

module.exports = router;
