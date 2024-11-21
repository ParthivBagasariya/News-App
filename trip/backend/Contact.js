const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt=require("bcrypt")
const cors = require("cors");
const v=require('validator')
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://anuraggarsondiya1904:AcBUNB64SexgoE4I@cluster0.mhqpiov.mongodb.net/Place");
const UserSchema = new mongoose.Schema({
  username: String,
  email:String,
  mobile_no:{
    type: Number,

    validate(val){
      if(val>10){
        let k=new Error("Mobile number should be 10 digit")
        throw k;
      }
    }
  }
});


const User = mongoose.model("User", UserSchema);
mongoose.pluralize(null);



app.post("/api/signup", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.name,
      email: req.body.email,
      mobile_no: req.body.number,
    });
    await newUser.save();
    res.status(201).json({ message: "Sucess" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
