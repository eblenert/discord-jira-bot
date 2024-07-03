import express from "express";
const router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  console.log(req.body);
  console.log(req.headers);
  console.log(req.query);
  res.sendStatus(200);
});

export default router;
