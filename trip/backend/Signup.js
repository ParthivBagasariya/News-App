const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const v=require("validator")
const bcrypt=require("bcrypt")
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1/Signup");
const login= new mongoose.Schema({
  user: String,
  password:{
    type:String,
    minlength:[8,"Min length Must be 8"]
  },
});

const User2 = mongoose.model("Login", login);
mongoose.pluralize(null);

app.post("/api/login", async (req, res) => {
    try {
        const user= new User2({
        user:req.body.username,
        password:req.body.password,
    })
      await user.save();
      res.json({ message: "signup successful." });
      navigate('/')
    } catch (error) {
      res.status(500).json({ error: "An error occurred." });
    }
  });
  

  const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
