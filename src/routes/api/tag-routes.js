const { Router } = require("express");
const {
  getAllTags,
  getTagById,
  createTags,
  updateTagById,
  deleteTagById,
} = require("../../controllers/api/tags");

const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

const router = Router();

router.get("/", getAllTags);
router.get("/:id", getTagById);

router.post("/", createTags);

router.put("/:id", updateTagById);
router.delete("/:id", deleteTagById);

// router.get('/', (req, res) => {
//   // find all tags
//   // be sure to include its associated Product data
// });

// router.get('/:id', (req, res) => {
//   // find a single tag by its `id`
//   // be sure to include its associated Product data
// });

// router.post('/', (req, res) => {
//   // create a new tag
// });

// router.put('/:id', (req, res) => {
//   // update a tag's name by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete on tag by its `id` value
// });

module.exports = router;
