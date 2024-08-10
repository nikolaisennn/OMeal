const express = require('express')
const app = express()
const path = require('path')

const productsRouter = require('./routes/products')

// static assets
app.use(express.static(path.join(__dirname, 'public')))
// bootstrap
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/products', productsRouter)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
