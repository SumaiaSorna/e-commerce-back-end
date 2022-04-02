const { Product, ProductTag } = require("../../models");
const { logError } = require("../../utils/logger");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    return res.json({ success: true, data: allProducts });
  } catch (error) {
    logError("GET All Products", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getProductById = async (req, res) => {
  try {
    const data = await Product.findByPk(req.params.id);
    if (data) {
      return res.json({ success: true, data });
    }
    return res
      .status(404)
      .json({ success: false, error: "Product does not exist" });
  } catch (error) {
    logError("GET product by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createProducts = async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

const updateProductById = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Update Product" });
  } catch (error) {
    logError("UPDATE Product", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const deleteProductById = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Deleted Product" });
  } catch (error) {
    logError("DELETE Product", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProducts,
  updateProductById,
  deleteProductById,
};
