
var express = require('express');
var router = express.Router();


const sqlite3= require('sqlite3').verbose();
let sql;

const db = new sqlite3.Database('./sqlite3_test.db', sqlite3.OPEN_READWRITE,(err)=>
{
  if(err)
    return console.error(err.message);
});

sql = 'SELECT * FROM users'

//let sql = 'CREATE TABLE users(id INTEGER PRIMARY KEY,first_name,last_name,username,password,eamil)';

/* GET users listing. */
router.get('/', function(req, res, next) {
    
 //res.render('queryview'); 
 //console.log("Hello");
 //res.send('<script>console.log("Hello world!")</script>');
  
  db.all(sql, [], (err, rows)=>{
    if(err)
      return console.error(err.message); 
      res.render('query_view', {rows})
      console.log(rows);
  });

});
module.exports = router;


