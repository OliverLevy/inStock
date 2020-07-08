const express = require("express");
const router = express.Router();
const locations = require("../instock-data/locations.json");
const inventory = require("../instock-data/inventory.json");

// get ALL locations
router.get("/", (req, res) => {
  res.json(locations);
});

router.get("/:id", (req, res) => {
  let currentWarehouseId = req.params.id
  let currentWarehouse = locations.filter(item => item.id === currentWarehouseId)
  let currentWarehouseInventory = inventory.filter(item => item.warehouseId === currentWarehouseId)
  let output = {currentWarehouse, currentWarehouseInventory}

  if (!currentWarehouse[0]) return res.status(404).json({reply: "Warehouse does not exist"})
  res.json(output);
});

module.exports = router;
