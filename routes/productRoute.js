const express = require("express");
const {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createProduct);
router.put("/:id",authMiddleware, isAdmin, updateProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/:id", getProduct);
router.delete("/:id",authMiddleware, isAdmin, deleteProduct);

module.exports = router;
