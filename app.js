require("dotenv").config();

const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cookieSession = require("cookie-session");
const path = require("path");
const routes = require("./routes/routes");
const User = require("./model/db");

const app = express();

require("./auth");

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(session({ secret: "Shh, its a secret!" }));

app.use(passport.initialize());

app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(5000, () => {
  console.log("App is running on port 5000");
});
