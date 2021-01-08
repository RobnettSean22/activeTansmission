const express = require("express");
const router = express.Router();
const Service = require("../models/services");

router.get("/", async (req, res) => {
  const results = await Service.find({});
  try {
    res.send(results);
  } catch (err) {
    res.json({ message: "Not found" });
  }
});
module.exports = router;
