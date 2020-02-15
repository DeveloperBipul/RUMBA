const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
const { mogoUrl } = require("./keys");

require("./models/User");
require("./models/Post");
//routing
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(bodyParser.json());
app.use(authRoutes);
app.use(postRoutes);

mongoose.connect(mogoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo ");
});

mongoose.connection.on("error", err => {
  console.log("this is error", err);
});

// app.get("/posts", (req, res) => {
//   res.send("hello");
// });
app.listen(PORT, () => {
  console.log("server running " + PORT);
});
