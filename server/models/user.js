var mongoose = require('./../../mongodb/dblink');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName:  String,
  userPwd: String,
  userId:String,
  superUser:Boolean
});

module.exports =mongoose.model('user',UserSchema)