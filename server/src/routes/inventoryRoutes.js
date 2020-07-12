const express = require('express');
const router = express.Router();
const inventoryList = require('../data/inventory.json');
const warehouseList = require('../data/locations.json');
const uuid = require('uuid');

// get all inventory
// route goes here

router.get('/inventory', (req,res) => {
  res.status(200).json(inventoryList);
})

// get a specific inventory item
router.get('/inventory/:inventoryid', (req, res) => {
    const targetInventoryItem = inventoryList.find((object) => object.id == req.params.inventoryid);

    if (targetInventoryItem) {
      res.status(200).json(targetInventoryItem);
    } else {
      res.status(404).json({
        error: 'Inventory item not found'
      });
    }
  });

// delete a specific inventory item
router.delete('/inventory/:inventoryid', (req, res) => {
  const targetInventoryItem = inventoryList.find((object) => object.id === req.params.inventoryid);
  const targetInventoryItemIndex = inventoryList.findIndex((object) => object.id === req.params.inventoryid);

  if (targetInventoryItem) {
      inventoryList.splice(targetInventoryItemIndex,1);
      res.json(warehouseList);
  } else {
      res.status(400).json({
          error: 'Inventory item not found. Inventory item could not be deleted.'
      });
  }
})

//POST inventory item

router.post('/inventory', (req,res) => {
  console.log(req);
  
  //insert if/else statement with error messages
  
  
  const newInventory = {
      id: uuid.v4(),
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      lastOrdered: req.body.lastOrdered,
      city: req.body.city,
      country: req.body.country,
      isInstock: req.body.isInstock,
      categories: req.body.categories,
      warehouseId: req.body.warehouseId
    }
  
    inventoryList.push(newInventory);
    res.json(inventoryList);
  
  })


module.exports = router;