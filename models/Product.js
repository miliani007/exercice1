const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    reference: {
        type: String
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
    variants: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Variant'
    } 
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);