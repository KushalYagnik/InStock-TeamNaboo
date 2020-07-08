const express = require('express');
const router = express.Router();
const inventoryList = require('../data/inventory.json');
const warehouseList = require('../data/locations.json');

// get a specific inventory item
router.get('/inventory/:id', (req, res) => {
    const targetInventoryItem = inventoryList.find((object) => object.id == req.params.id);

    if (targetInventoryItem) {
      res.status(200).json(targetInventoryItem);
    } else {
      res.status(404).json({
        error: 'Inventory item not found'
      });
    }
  });

// delete a specific inventory item
router.delete('/inventory/:id', (req, res) => {
  const targetInventoryItem = inventoryList.find((object) => object.id === req.params.id);
  const targetInventoryItemIndex = inventoryList.findIndex((object) => object.id === req.params.id);

  if (targetInventoryItem) {
      inventoryList.splice(targetInventoryItemIndex,1);
      res.json(warehouseList);
  } else {
      res.status(400).json({
          error: 'Inventory item not found. Inventory item could not be deleted.'
      });
  }
})

module.exports = router;