const express = require("express");
const router = express.Router();
const cors = require("cors");
const uuid = require("uuid");
// router.use(express.json());
router.use(cors());
const inventory = require("../instock-data/inventory.json");
const { SSL_OP_CIPHER_SERVER_PREFERENCE } = require("constants");



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
    categoies: req.body.categoies,
    warehouseId: req.body.warehouseId,
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
router.post("/delete", (req,res)=>{

const deleteItem = {
  id: req.body.id,
  name: req.body.name,
  description: req.body.description,
  quantity: req.body.quantity,
  lastOrdered: req.body.lastOrdered,
  city: req.body.city,
  country: req.body.country,
  isInstock: req.body.isInstock,
  categoies: req.body.categoies,
  warehouseId: req.body.warehouseId,
  deleted: req.body.deleted
}

if(deleteItem.id === inventory.id){
  deleteItem = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    lastOrdered: req.body.lastOrdered,
    city: req.body.city,
    country: req.body.country,
    isInstock: req.body.isInstock,
    categoies: req.body.categoies,
    warehouseId: req.body.warehouseId,
    deleted: true
  }
}else{
  return res.status(400).send({msg: "Please check you have filled in the ID correctly or provided one."})
}
//inventoryNotDeleted=inventory.map()
//res.json(inventoryNotDeleted)
res.json(inventory)
}
//deleted true or false?
//return everything that is false.


)

module.exports = router;
