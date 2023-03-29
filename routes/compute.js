var express = require('express');
var router = express.Router();
let x;
let y;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){

    
    x=Math.floor(Math.random()*20)
    y=Math.floor(Math.cosh()*10)
    let ab = Math.fround(x);
    let abc = Math.random(x);
    let abcd =  Math.round(x);
    res.send('Math.fround() applied for'+x +'is' +ab+'\n Math.random() applied for'+x +'is'+abc+'\n  Math.round() applied for'+x +'is'+abcd)
}
else{
    x=req.query.x;
    let ab = Math.fround(x);
    let abc = Math.random(x);
    let abcd =  Math.round(x);
    res.send('Math.fround() applied for'+x +'is' +ab+'\n Math.random() applied for'+x +'is'+abc+'\n  Math.round() applied for'+x +'is'+abcd)
}
});

module.exports = router;