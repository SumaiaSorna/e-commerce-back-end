const { Category } = require("../../models");
const { logError } = require("../../utils/logger");

const getAllCatagories = async (req, res) => {
  try {
    const allCategories = await Category.findAll();
    return res.json({ success: true, data: allCategories });
  } catch (error) {
    logError("GET catagories", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
  //find all categories
  //be sure to include its associated Products
};

const getCatagoriesById = async (req, res) => {
  try {
    const data = await Category.findByPk(req.params.id);
    if (data) {
      return res.json({ success: true, data });
    }
    return res
      .status(404)
      .json({ success: false, error: "Traveller does not exist" });
  } catch (error) {
    logError("GET traveller by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createCatagories = async (req, res) => {
  // create a new category
  res.send("createCatagories");
};

const updateCatagoriesById = async (req, res) => {
  // update a category by its `id` value
  res.send("updateCatagoriesById");
};

const deleteCatagoriesById = async (req, res) => {
  // delete a category by its `id` value
  res.send("deleteCatagoriesById");
};

module.exports = {
  getAllCatagories,
  getCatagoriesById,
  createCatagories,
  updateCatagoriesById,
  deleteCatagoriesById,
};
