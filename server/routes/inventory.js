const express = require("express");
const router = express.Router();
const cors = require("cors");
const uuid = require("uuid");
const fs = require("fs");
router.use(cors());
const inventory = require("../instock-data/inventory.json");
const { SSL_OP_CIPHER_SERVER_PREFERENCE } = require("constants");



// get ALL inventory

router.get("/", (req, res) => {
  res.send(inventory.filter((item)=>(item.deleted===false)));
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


//Post Inventory Item
router.post("/", (req,res)=>{
  const postItem = {
    id: uuid.v4(),
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    lastOrdered: req.body.lastOrdered,
    city: req.body.city,
    country: req.body.country,
    isInstock: req.body.isInstock,
    categories: 'placeholder',
    warehouseId: 'W2',
    deleted: false
  }
  if(!postItem.name || !postItem.city || !postItem.country){
    return res.status(400).send({msg: "Please check that you have filled in the Item Name, City, and Country fields."})
  }else{
  inventory.unshift(postItem);
  } 
  res.json(inventory);
}
)

//Delete an item
router.delete("/:id", (req,res)=>{

  const itemDeleteId = req.params.id
  const flagItem = inventory.filter(
    (item) => item.id === itemDeleteId
  )
  if(!req.params.id || !flagItem[0]){
    return res.status(400).send({Error: "Please check you have filled in the ID correctly or provided one."})
  }else{
    flagItem[0].deleted=true
  }
  // return inventory with deleted:false
  res.send(inventory.filter((item)=>(item.deleted===false)));
  // rewrite inventory.json file by change deleted:false to true
  const updatedFile = inventory
  const jsonString = JSON.stringify(updatedFile, null, 2)
  fs.writeFile("./instock-data/inventory.json", jsonString, (error)=>{
    if(error) return console.error("Error writing file.", error)
    else console.log("File written successful.")
  })
  }
  )

module.exports = router;