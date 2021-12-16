const { Category } = require("../../models");
const { logError } = require("../../utils/logger");

const getAllCatagories = async (req, res) => {
  try {
    const allCategories = await Category.findAll();
    return res.json({ success: true, data: allCategories });
  } catch (error) {
    logError("GET All Catagories", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getCatagoriesById = async (req, res) => {
  try {
    const data = await Category.findByPk(req.params.id);
    if (data) {
      return res.json({ success: true, data });
    }
    return res
      .status(404)
      .json({ success: false, error: "Category does not exist" });
  } catch (error) {
    logError("GET Categories by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createCatagories = async (req, res) => {
  try {
    await Category.create(req.body);
    return res.json({ success: true, data: "Created category" });
  } catch (error) {
    logError("POST category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const updateCatagoriesById = async (req, res) => {
  try {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Update Category" });
  } catch (error) {
    logError("UPDATE Category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const deleteCatagoriesById = async (req, res) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Deleted Category" });
  } catch (error) {
    logError("DELETE Category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllCatagories,
  getCatagoriesById,
  createCatagories,
  updateCatagoriesById,
  deleteCatagoriesById,
};
