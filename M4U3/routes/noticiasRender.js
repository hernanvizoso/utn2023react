var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('noticiasRender', { title: 'Noticias con Render' });
});

module.exports = router;