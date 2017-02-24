var express = require('express')
var router = express.Router()
var controllers = require('../controllers/user')

/* GET users listing. */
router.post('/user', controllers.register)
router.post('/login', controllers.login)

module.exports = router
