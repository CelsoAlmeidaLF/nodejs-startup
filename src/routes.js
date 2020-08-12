var express = require('express')
var router = express.Router()

router.get('/', function(req, res) { res.render('home/index') })

router.use(function(req, res, next) { res.status(404).redirect('/') })

module.exports = router
