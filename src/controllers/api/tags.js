const { Tag } = require("../../models");
const { logError } = require("../../utils/logger");

const getAllTags = async (req, res) => {
  try {
    const allTags = await Tag.findAll();
    return res.json({ success: true, data: allTags });
  } catch (error) {
    logError("GET All Tags", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getTagById = async (req, res) => {
  res.send("getTagById");
  // find a single tag by its `id`
  // be sure to include its associated Product data
};

const createTags = async (req, res) => {
  // create a new tag
  res.send("createTags");
};

const updateTagById = async (req, res) => {
  // update a tag's name by its `id` value
  res.send("updateTagById");
};

const deleteTagById = async (req, res) => {
  try {
    await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Deleted Tag" });
  } catch (error) {
    logError("DELETE Tag", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllTags,
  getTagById,
  createTags,
  updateTagById,
  deleteTagById,
};
