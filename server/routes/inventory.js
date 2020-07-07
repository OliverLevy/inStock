const express = require('express');
const router = express.Router();
const cors = require("cors");
// router.use(express.json());
// router.use(cors());
const inventory = require('../instock-data/inventory.json');

// get ALL inventory
router.get('/', (req, res) => {
    res.send(inventory);
    
}) 

module.exports = router;