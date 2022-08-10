const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

const getProduct = asyncHandler(async (req, res) => {
    // const products = Product.find()
    // res.status(200).json(products)
    res.send('products')
})

const setProduct = asyncHandler(async (req, res) => {
    // const product = await Product.create({})
    res.send('create product')
})

const updateProduct = asyncHandler(async (req, res) => {
    // const product = await Product.create({})
    res.send('update product')
})

const deleteProduct = asyncHandler(async (req, res) => {
    // const product = await Product.create({})
    res.send('delete product')
})

module.exports = {
    getProduct, setProduct, updateProduct, deleteProduct
}