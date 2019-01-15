var mongoose = require('./../../mongodb/dblink');
var Schema = mongoose.Schema;

var scenicSchema = new Schema({
  scenicName:  String,
  pic: String,
  rate:Number,
  price:Number,
});
module.exports =mongoose.model('scenic',scenicSchema)