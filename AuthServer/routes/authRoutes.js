const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { jwtkey } = require("../keys");
const router = express.Router();
const User = mongoose.model("User");

const requireToken = require("../middleware/requireToken");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, jwtkey);
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "must provide email or password" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).send({ error: "must provide email or password" });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, jwtkey);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "must provide email or password" });
  }
});

/**
 * @method - POST
 * @description - Get LoggedIn User
 * @param - /user/me
 */

router.get("/me", requireToken, async (req, res) => {
  try {
    // getting loggedin user details from middleware
    res.send({
      email: req.user.email,
      name: req.user.name,
      Address: req.user.address
    });
  } catch (error) {
    res.send("No data found to display.");
  }
});

module.exports = router;
