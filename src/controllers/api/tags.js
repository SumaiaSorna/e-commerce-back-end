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
  try {
    const data = await Tag.findByPk(req.params.id);
    if (data) {
      return res.json({ success: true, data });
    }
    return res
      .status(404)
      .json({ success: false, error: "Tag does not exist" });
  } catch (error) {
    logError("GET Tags by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createTags = async (req, res) => {
  try {
    await Tag.create(req.body);
    return res.json({ success: true, data: "Created tag" });
  } catch (error) {
    logError("POST tag", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const updateTagById = async (req, res) => {
  try {
    await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Update Tag" });
  } catch (error) {
    logError("UPDATE Tag", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
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
