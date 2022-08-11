const mongoose = require('mongoose');

const variantSchema = mongoose.Schema({
    sku: {
        type: String,
        unique: true
    },
    specification:{
        type: String
    },
    price: {
        type: Number
    }
}, {
    timestamps: false
})

module.exports = variantSchema