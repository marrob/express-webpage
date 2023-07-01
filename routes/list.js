var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  res.render('listview', { items });
});

module.exports = router;