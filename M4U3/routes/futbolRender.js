var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('futbolRender', { title: 'llamado a futbol con Render' , jugador:'Messi' });
});

module.exports = router;