const express = require("express");
const router = express.Router();
const locations = require("../instock-data/locations.json");

// get ALL locations
router.get("/", (req, res) => {
  res.json(locations);
});

module.exports = router;
