const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(404)
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.product_id)
        res.status(200).json(product)
    } catch (error) {
        res.status(404);
    }
}

const setProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        res.status(404)
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.product_id, req.body, {
            new: true
        })
        res.status(200).json(product);
    } catch (error) {
        res.status(404)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.product_id)
        res.status(204);
        res.end();
    } catch (error) {
        res.status(404)
    }
    
}

module.exports = {
    getProducts, getProduct ,setProduct, updateProduct, deleteProduct
}