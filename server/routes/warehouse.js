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
  console.info(req.params)

  let test = inventory[0].warehouseId
  res.json(inventory);
  // res.json("hi");
});

module.exports = router;
