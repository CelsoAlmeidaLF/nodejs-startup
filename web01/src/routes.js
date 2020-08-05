var express = require('express')
var router = express.Router()

// page home(index)
router.get('/', function(req, res) { res.render('home/index') })

// page sobre
router.get('/sobre', function(req, res) { res.send('Ajuda Systekna') })

router.use(function(req, res, next) {
  res.status(404).redirect('/')
})

module.exports = router
