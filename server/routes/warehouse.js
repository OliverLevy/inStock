const express = require("express");
const router = express.Router();
const cors = require("cors");
const uuid = require("uuid");
const fs = require('fs')
router.use(cors());
const locations = require("../instock-data/locations.json");
const { json } = require("express");

// get ALL locations
router.get("/", (req, res) => {
  res.json(locations);
});

// post a new warehouse to locations and replies with the new warehouse list aka locations
// example post for front end:
// =============
// {
//   "newWarehouse":{
//       "name": "Oliver",
//       "address": {
//           "street": "123 Fake Street W",
//           "location": "Toronto, CAN"
//           },
//       "contact": {
//           "name": "Blah Blah",
//           "position": "Regional Manager",
//           "phone": "416 679 4324",
//           "email": "DimoDurian@pundermifflin.com"
//       },
//       "inventoryCategories": "dog food, pizza"
//       }
// }
// =============
router.post("/", (req, res) => {
  const warehouseToAdd = req.body.newWarehouse;
  const output = {
    id: uuid.v4(),
    name: warehouseToAdd.name,
    address: {
      street: warehouseToAdd.address.street,
      location: warehouseToAdd.address.location,
    },
    contact: {
      name: warehouseToAdd.contact.name,
      position: warehouseToAdd.contact.position,
      phone: warehouseToAdd.contact.phone,
      email: warehouseToAdd.contact.email,
    },
    inventoryCategories: warehouseToAdd.inventoryCategories,
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
});

module.exports = router;
