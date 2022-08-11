const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
})

const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
})

const setProduct = asyncHandler(async (req, res) => {
    console.log(req.body);
    const product = await Product.create({
        reference: req.body.reference,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image
    })
    res.status(200).json(product);
})

const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(product);
})

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.status(204);
    
})

module.exports = {
    getProducts, getProduct ,setProduct, updateProduct, deleteProduct
}