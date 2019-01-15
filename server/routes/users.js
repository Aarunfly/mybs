var express = require('express');
var router = express.Router();
var User = require('./../models/user');



router.post('/', function(req, res, next) {
  let user= req.session.user
  if(user){
    res.json({
      status:"success",
      Msg:"自动登陆成功",
      result:user
    })
  }else{
    res.json({
      status:"fail",
      Msg:"自动登陆失败",
      result:user
    })
  }
});
//用户登录
router.post("/login",function(req,res,next){

  var userName=req.body.userName,
    userPwd=req.body.userPwd;
  //普通用户登录查找
  User.findOne({userName:userName}, function (err,doc) {
    if(err!=null){
        res.json({
          status:"fali",
          Msg:err,
        })
    }else
       if(doc==null){
        
        res.json({
          status:"success",
          Msg:"用户不存在",
          result:{
            userStatus:"未登录",
          }
        })
      }else 
      if(doc!=null){
        var findPwd = doc.userPwd;
        
        if(findPwd==userPwd){
          // 在客户端存cookie,因为cookie可以伪造，所以还可以存session
          console.log(req.session,"session");
          
          if(doc.superUser){
                let userMsg={
                  userStatus:"superUser",
                  userName:doc.userName, 
                }
                // res.send(req.session.user);
                req.session.user=userMsg;
                
                          res.json({
                            status:"success",
                            Msg:"登陆成功",
                                result:{
                                  userStatus:"superUser",
                                  userName:doc.userName, 
                              }

                          })
                          
          }else{
            let userMsg={
              userStatus:"User",
              userName:doc.userName, 
            }
            // res.send(req.session.user);
            
            
                          res.json({
                            status:"success",
                            Msg:"登陆成功",
                            result:{
                              userStatus:"User",
                              userName:doc.userName, 
                          }
                          })
                          req.session.user=userMsg;
          }
        }else if(findPwd!=userPwd){
          res.json({
            status:"success",
            Msg:"用户名或密码错误",
            result:{
              userStatus:"未登录",
            }
          })
        }
        
       }
    
        
    
});
  

})
//用户登出
router.post("/logout",function(req,res,next){
  res.cookie("")
})
//用户注册
router.post("/adduser",function(req,res,next){
  let userName=req.body.addName;
  User.findOne({userName:userName}, function (err,doc) {
          if(err!=null){
            res.json({
              status:"fali",
              Msg:err,
            })
          }else if(doc==null){
            //用户不存在
            let addUser=new User({
              userName: req.body.addName,
              userPwd: req.body.addPwd,
              superUser:req.body.superUser,
             })
             addUser.save(function(err,doc){
             res.json({
              status:"success",
              Msg:"注册成功!请登录",
            })
             })
          }else if(doc!=null){
            res.json({
              status:"success",
              Msg:"该用户名已存在",
            })
          }
  })
     
    })
module.exports = router;
