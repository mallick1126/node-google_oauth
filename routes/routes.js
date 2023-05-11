const express = require("express");
const passport = require("passport");
const router = express.Router();
const controller = require("../controllers/controller");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home
    res.redirect("/success");
  }
);

router.get("/success", controller.success);

module.exports = router;
