const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(express.static('public'));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/home.html");
});
app.get("/login",function(req,res){
	res.sendFile(__dirname+"/signin.html");
});
app.listen(3000,function()
{
  console.log("APP CONNECTED ON PORT 3000");
});
