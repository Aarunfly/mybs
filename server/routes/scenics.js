var express = require('express');
var router = express.Router();
var Scenic= require('../models/scenic');
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//景点列表
router.post("/list",function(req,res,next){
  


  //景点列表查找
  Scenic.find({}, function (err,doc) {
    res.json({
      Status:"success",
      Msg:"",
      list:doc
    }) 
});
  

})

module.exports = router;
