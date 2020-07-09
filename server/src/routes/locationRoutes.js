const express = require('express');
const router = express.Router();
const inventoryList = require('../data/inventory.json');
const warehouseList = require('../data/locations.json');

// get all warehouse
// route goes here


// get a specific inventory item
router.get('/locations/:warehouseid', (req, res) => {
  const targetWarehouse = locationList.find((object) => object.id === req.params.id);
  const targetInventory = inventoryList.find((object2) => object2.id === req.params.id);

    if (targetWarehouse && targetInventory) {
      res.status(200).json({
        "Warehouse located": targetWarehouse,
        "Warehouse inventory": targetInventory
      });
    } else {
      res.status(404).json({
        error: 'Information not found'
      });
    }
  });

// delete a specific warehouse item
// router.delete('/location/:id', (req, res) => {
//   const targetWarehouseItem = inventoryList.find((object) => object.id === req.params.id);
//   const targetWarehouseItemIndex = inventoryList.findIndex((object) => object.id === req.params.id);

//   if (targetWarehouseItem) {
//       warehouseList.splice(targetwarehouseItemIndex,1);
//       res.json(warehouseList);
//   } else {
//       res.status(400).json({
//           error: 'Warehouse item not found. Warehouse item could not be deleted.'
//       });
//   }
// })

module.exports = router;