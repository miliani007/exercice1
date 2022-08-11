const mongoose = require('mongoose');
const variantSchema = require('./Variants')

const productSchema = mongoose.Schema({
    reference: {
        type: String,
        unique: true
    },
    name:{
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    variants: [variantSchema]
}, {
    timestamps: false
})

module.exports = mongoose.model('Product', productSchema);