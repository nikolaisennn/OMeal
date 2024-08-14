/* Initialize express app */
const express = require('express')
const app = express()

/* Modules */
const path = require('path')
const morgan = require('morgan');
const mongoose = require('mongoose'); 
const productsRouter = require('./routes/products')
const recipesRouter = require('./routes/recipes')

// static assets
// app.use(express.static(path.join(__dirname, 'public')))
// bootstrap
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
// Morgan middleware in 'dev' mode
app.use(morgan('tiny'));
// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'public');
// Routes 
app.use('/api/products', productsRouter)
app.use('/api/recipes', recipesRouter)

// Connect to database
const dbURI = 'mongodb+srv://nikolaisen:Niksatacs11@omeal.zw1wn.mongodb.net/OMeal?retryWrites=true&w=majority&appName=OMeal';
mongoose.connect(dbURI)
  .then((result)=>{
    app.listen(5000, () => {
      console.log('Server is listening on port 5000....')
    })
  })
  .catch((err)=>{
    console.log(err);
  })

// Handle views
app.get('/', (req,res)=>{
    res.render('index.ejs');
})