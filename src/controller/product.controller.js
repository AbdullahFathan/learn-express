const product = require("../models/product.model.js");

const getAllProduct = async (req, res) => {
  try {
    const dataReturn = await product.find({});
    res.status(200).json(dataReturn);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await product.findById(id);
    if (!data) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const dataJson = await product.create(req.body);
    res.status(200).json(dataJson);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const newData = await product.findByIdAndUpdate(id, req.body);

    if (!newData) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    const updateData = await product.findById(id);

    res.status(200).json(updateData);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await product.findByIdAndDelete(id);

    if (!data) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    res.status(200).json({ msg: "delete data berhasil" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllProduct,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
