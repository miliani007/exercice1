const express = require('express');
const { getProduct, setProduct, updateProduct, deleteProduct } = require('../controller/ProductController.js');
const router = express.Router();

router.route('/').get(getProduct).post(setProduct);
router.route('/:id').put(updateProduct).delete(deleteProduct);

module.exports = router;