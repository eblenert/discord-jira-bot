var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.body);
  console.log(req.headers);
  console.log(req.query);
  res.render("index", { title: "Express" });
});

module.exports = router;
