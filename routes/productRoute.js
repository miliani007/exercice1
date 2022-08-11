const express = require('express');
const { getProducts, setProduct, updateProduct, deleteProduct, getProduct } = require('../controller/ProductController.js');
const { getVariant, getVariants } = require('../controller/VariantController.js');

const router = express.Router();

router.route('/').get(getProducts).post(setProduct);
router.route('/:product_id').get(getProduct).put(updateProduct).delete(deleteProduct);
router.route('/:product_id/variants').get(getVariants);
router.route('/:product_id/variants/:variant_id').get(getVariant);

module.exports = router;