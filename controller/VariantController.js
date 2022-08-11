const Product = require("../models/Product")

const getVariants = async (req, res) => {
    try {
        const {id} = req.params
        const query = {reference: id}
        const projection = {_id: 0, variants: 1}
        const {variants} = await Product.findOne(query, projection)
        res.status(200).json(variants)
    } catch (error) {
        res.status(404);
    }
}

const getVariant = async (req, res) => {
    try {
        const {id, varid} = req.params
        const query = {reference: id}
        const projection = {_id: 0, variants: 1}
        const {variants} = await Product.findOne(query, projection)
        const data = variants?.find(v => v.sku === varid) || []
        res.status(200).json(data)
    } catch (error) {
        res.status(404);
    }
}

module.exports = {
    getVariant, getVariants
}