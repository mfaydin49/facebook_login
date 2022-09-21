const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login", { page: "login" });
});
/* 
router.get("/oauth/facebook", async (req, res) => {
  const reqQuery = await req.query;
  console.log(reqQuery);
  res.redirect("/home");
}); */

module.exports = router;
