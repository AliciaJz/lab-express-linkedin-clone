const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:String,
  userName:String,
  email:String,
  password:String, 
  summary:String,
  imageUrl:String,
  company:String,
  jobTitle:String
});

module.exports = mongoose.model("User", UserSchema);