var express = require('express')
var router = express.Router()

router.get('/', function(req, res) { res.render('home/index') })
router.get('/servicos', function(req, res) { res.render('home/servicos') })
router.get('/sobre', function(req, res) { res.render('home/sobre') })
router.get('/contato', function(req, res) { res.render('home/contato') })

router.use(function(req, res, next) { res.status(404).redirect('/') })

module.exports = router
