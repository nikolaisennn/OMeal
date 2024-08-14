const Recipe = require('../models/recipe');


const createRecipe = (req, res) => {
    Recipe.create({
        name: 'Test',
        ingredients: ['66bb521ca058118d8e4f7eed', '66bb521ca058118d8e4f7eee'],
        description: 'Test recipe',
        img: ''
    })
        .then((result)=>{
        res.send(result);
        })
        .catch((err)=>{
        console.log(err);
        })
}

module.exports = {
  createRecipe
}