const express = require("express");
const router = express.Router();
const cors = require("cors");
const uuid = require("uuid");
const fs = require('fs')
router.use(cors());
const locations = require("../instock-data/locations.json");
const inventory = require("../instock-data/inventory.json");
const { json } = require("express");


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
})

router.post("/", (req, res) => {
  const warehouseToAdd = req.body.newWarehouse;
  const output = {
    id: uuid.v4(),
    name: warehouseToAdd.locationName,
    address: {
      street: warehouseToAdd.locationAddress,
      location: warehouseToAdd.locationCountry
    },
    contact: {
      name: warehouseToAdd.contact.locationContactName,
      position: warehouseToAdd.contact.locationContactPosition,
      phone: warehouseToAdd.contact.locationContactPhone,
      email: warehouseToAdd.contact.locationContactEmail,
    },
    inventoryCategories: warehouseToAdd.locationCategories,
  };
  if (
    !output.name ||
    !output.address.street ||
    !output.address.location ||
    !output.contact.name ||
    !output.contact.position ||
    !output.contact.phone ||
    !output.contact.email ||
    !output.inventoryCategories
  ) {
    return res.status(400).json({ error: "Missing information" });
  } else {
    locations.push(output);
  }
  res.send(locations);

  const updatedFile = locations
  const jsonString = JSON.stringify(updatedFile, null, 2)
  fs.writeFile('./instock-data/locations.json', jsonString, (err) => {
    if (err) return console.error('Error writing file', err)
    else console.log('file written successfully')
  })
})

module.exports = router;