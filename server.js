//Import libraries from npm
const express = require('express')
const path = require('path') 
const bcrypt = require('bcrypt')

//App variable
const app = express()

//Set view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//Set static file path
app.use(express.static('public'))

//Routes
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3001)