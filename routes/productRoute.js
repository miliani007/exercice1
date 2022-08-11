const express = require('express');
const { getProducts, setProduct, updateProduct, deleteProduct, getProduct } = require('../controller/ProductController.js');
const router = express.Router();

router.route('/').get(getProducts).post(setProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;