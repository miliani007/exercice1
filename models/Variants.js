const mongoose = require('mongoose');

const variantSchema = mongoose.Schema({
    sku: {
        type: String
    },
    specification:{
        type: String
    },
    price: {
        type: Number
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Variant', variantSchema);