const express = require("express");
const router = express.Router();
const locations = require("../instock-data/locations.json");
const inventory = require("../instock-data/inventory.json");

// get ALL locations
router.get("/", (req, res) => {
  res.json(locations);
});

router.get("/:id", (req, res) => {
  //filter through the inventory and return items that match the warehouse id
  res.json(locations);
});

module.exports = router;
