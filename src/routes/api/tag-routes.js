const { Router } = require("express");
const {
  getAllTags,
  getTagById,
  createTags,
  updateTagById,
  deleteTagById,
} = require("../../controllers/api/tags");

const { Tag, Product, ProductTag } = require("../../models");

const router = Router();

router.get("/", getAllTags);
router.get("/:id", getTagById);

router.post("/", createTags);

router.put("/:id", updateTagById);
router.delete("/:id", deleteTagById);

module.exports = router;
