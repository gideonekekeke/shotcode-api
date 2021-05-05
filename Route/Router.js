const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const multer = require("multer");

const Teachers = require("../SchemaData/SchemaData");

const bcrypt = require("bcryptjs");
const { signup, login } = require("../Validation/Validation");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const imageUpload = multer({ storage: storage }).single("picture");

router.post("/signup", imageUpload, async (req, res) => {
  try {
    const { error } = await signup(req.body);
    if (error) {
      return res.status(404).json(error.details[0].message);
    }
    const newUserEmail = await Teachers.findOne({ email: req.body.email });

    if (newUserEmail) {
      return res.status(404).json("email already been used");
    }

    hider = await bcrypt.genSalt(10);
    passwordHider = await bcrypt.hash(req.body.password, hider);

    const files = new Teachers({
      name: req.body.name,
      email: req.body.email,
      picture: req.file.path,
      password: passwordHider,
    });
    const newData = await files.save();
    res.status(200).json(newData);
  } catch (err) {
    res.send("error" + err);
  }
});

router.post("/login", async (req, res) => {
  try {
    // const { error } = await login(req.body);
    // if (error) {
    //   return res.status(404).json(error.details[0].message);
    // }

    // checking for the the user to enter the correct email
    const emailchecker = await Teachers.findOne({ email: req.body.email });
    if (!emailchecker) return res.status(404).json("wrong input of email");
    // checking if the user password is correct.
    passwordHider = await bcrypt.compare(
      req.body.password,
      emailchecker.password
    );
    if (!passwordHider) {
      return res.status(404).json("incorrect password");
    }

    res.status(200).send("login sucessful");
  } catch (err) {
    res.status(404).json("error" + err);
  }
});

router.get("/", async (req, res) => {
  try {
    const newdata = await Teachers.find();

    res.status(200).json(newdata);
  } catch (err) {
    res.status(404).json("error" + err);
  }
});

module.exports = router;
