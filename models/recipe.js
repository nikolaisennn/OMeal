const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
    description: {
        type: String,
        required: true
    },
    img: {
        type: String
    }
}, {timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;