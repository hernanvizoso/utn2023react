var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Modulo 4 Unidad 3: Node' });
});

module.exports = router;
