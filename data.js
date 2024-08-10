const products = [
    {
        id: 1,
        name: 'egg',
        price: 0.50,
        macros: [25, 20, 15]
    },
    {
        id: 2,
        name: 'tomato',
        price: 2.50,
        macros: [3, 10, 7]
    },
    {
        id: 3,
        name: 'cheese',
        price: 12.50,
        macros: [20,25,30]
    },
    {
        id: 4,
        name: 'beef',
        price: 10.50,
        macros: [30,5,5]
    },
    {
        id: 5,
        name: 'milk',
        price: 3.00,
        macros: [15, 20, 10]
    }
]
const recipes = [
    {
        name: 'Scrambled eggs',
        ingredients: [{product: 'egg', quantity: 3}, {product: 'milk', quantity: '100ml'}, {product: 'cheese', quantity: '100g'}]
    },
    {
        name: 'Beef portion',
        ingredients: [{product: 'beef', quantity: '250g'}, {product: 'tomato', quantity: 1}, {product: 'egg', quantity: 1}]
    },
    {
        name: 'Salad Caprese',
        ingredients: [{product: 'tomato', quantity: 2}, {product: 'cheese', quantity: '150g'}]
    }
]
module.exports = { products, recipes }