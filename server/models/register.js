const mongoose=require('mongoose')
const registerSchema=new mongoose.Schema({
  username:String,
  password:String
})
const Registermodel=mongoose.model('Newsignup',registerSchema);
module.exports= Registermodel;