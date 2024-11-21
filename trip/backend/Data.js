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
  person:String,
  date:String,
});


const User = mongoose.model("User", UserSchema);
mongoose.pluralize(null);



app.post("/book", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.name,
      email: req.body.email,
      person: req.body.person,
      date: req.body.date,
    });
    await newUser.save();
    res.status(201).json({ message: "Sucess" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
});


const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
