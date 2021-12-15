const getAllCatagories = (req, res) => {
  // find all categories
  // be sure to include its associated Products
  res.send("getAllCatagories");
};

const getCatagoriesById = (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  res.send("getCatagoriesById");
};

const createCatagories = (req, res) => {
  // create a new category
  res.send("createCatagories");
};

const updateCatagoriesById = (req, res) => {
  // update a category by its `id` value
  res.send("updateCatagoriesById");
};

const deleteCatagoriesById = (req, res) => {
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
