var router = require('express').Router()
var test = require('./test')

router.use('/test', test);

router.get('/', function (req, res) {
  res.status(200).json('Estás conectado a nuestra API')
})

module.exports = router