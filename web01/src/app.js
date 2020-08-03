const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')

// config
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

// public
app.use(express.static(path.join(__dirname,'../public')))

// rotas
app.get('/',(req,res) => { res.render('home/index') })
app.get('/dev',(req,res) => { res.send('dev') })

// outros
app.listen(8388,()=>{
    console.log("server open: appweb3, localhost:8388")
})
