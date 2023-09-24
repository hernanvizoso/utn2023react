var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('testRender', { title: 'llamado a test con Render' });
});

module.exports = router;