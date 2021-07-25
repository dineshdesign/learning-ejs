// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

// Static Files Paths
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Views
app.use(expressLayouts)
app.set('layout', './layouts/layout')
// app.set('views', './views')
app.set('view engine', 'ejs')


app.get('', (req, res) => {
    // res.send('Hello Dinesh')
    // res.sendFile(__dirname + '/views/index.html')
    res.render('index', { title: 'Home' })
})


app.get('/about', (req, res) => {
    res.render('about', { layout: './layouts/sidebar', title: 'About' })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:{port}`)
})