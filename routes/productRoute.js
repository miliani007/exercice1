const express = require('express');
const { getProducts, setProduct, updateProduct, deleteProduct, getProduct } = require('../controller/ProductController.js');
const { getVariant, getVariants } = require('../controller/VariantController.js');

const router = express.Router();

router.route('/').get(getProducts).post(setProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);
router.route('/:id/variants').get(getVariants);
router.route('/:id/variants/:varid').get(getVariant);

module.exports = router;