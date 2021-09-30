var express=require('express');
var path=require('path');
var app=express();
var staticFolder=express.static(path.join (__dirname,"expapp"));
app.use(staticFolder);
app.get('/', function(req,res){
res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(1313);
console.log("Website is poseted on port no: 1313");