/*

A debug indítása: npm run devStart

http://localhost:3000/list
http://localhost:3000/query

*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //  res.send("Hello bellos");
   res.render('index', { title3: 'Express' });
});

module.exports = router;
