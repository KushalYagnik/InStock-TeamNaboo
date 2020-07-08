const express = require('express');
const router = express.Router();
const inventoryList = require('../data/inventory.json');

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

module.exports = router;