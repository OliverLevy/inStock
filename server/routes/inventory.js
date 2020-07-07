const express = require("express");
const router = express.Router();
const cors = require("cors");
// router.use(express.json());
// router.use(cors());
const inventory = require("../instock-data/inventory.json");

// get ALL inventory
router.get("/", (req, res) => {
  res.send(inventory);
});
// get inventory by id
router.get("/:id", (req, res) => {
  const found = inventory.some((item) => item.id === req.params.id);

  if (found) {
    res.json(inventory.filter((item) => item.id === req.params.id));
  } else {
    // if the id does not exist
    res.status(404).json({ msg: `no inventory with the id ${req.params.id}` });
  }
});

module.exports = router;
