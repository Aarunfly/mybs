var mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://127.0.0.1:57686/jingdian', { useNewUrlParser: true }, function(err) {
    if (err) {

        　　　　 console.log('Connection Error:' + err)

        　　 } else {

        　　　　 console.log('Connection success!') }
});
//监听成功
mongoose.connection.on("connected", function() {
    console.log("MongoDB connected success")
});
//链接异常
mongoose.connection.on("error", function(err) {
    console.log("MongoDB connected fail" + err)
});
//断开链接
mongoose.connection.on("disconnected", function() {
    console.log("MongoDB connected disconnected")
});
module.exports = mongoose;