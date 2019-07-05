const express = require("express");
const router = express.Router();
const api = require("./fk-api");
router.post("/api", (req, res) => {
  const { body } = req;
  const { data } = body;
  //getting data
  api.queryfeedlist(data, rs => {
    res.json(rs);
  });
});

module.exports = router;
