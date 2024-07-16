const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller.js");

router.get("/", getAllProduct);
router.get("/:id", getSingleProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
