const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path')
const routes = require('./routes')
const port = 3000

// config
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

// public
app.use(express.static(path.join(__dirname,'../public')))
app.use(express.static(path.join(__dirname,'../dist')))

// rotas
app.use('/', routes);

// outros
app.listen(port,()=>{ console.log("server open: appweb3, localhost: " + port) })

// cp -r  node_modules/bootstrap/dist/ dist
// cp -r  node_modules/jquery/dist/*.js dist
