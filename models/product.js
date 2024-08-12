const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    fats: {
        type: Number,
        required: true
    },
    isQuantifiable: {
        type: Boolean,
        required: true
    }
}, {timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;