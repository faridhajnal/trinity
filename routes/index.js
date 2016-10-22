var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cases', function(req, res, next){
  fs.readFile('files/casos.json', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
  res.json(JSON.parse(data));
});
});

module.exports = router;
