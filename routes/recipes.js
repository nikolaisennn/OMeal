const express = require('express')
const router = express.Router()

const {
    createRecipe
  } = require('../controllers/recipes')

router.route('/').get(createRecipe)

module.exports = router