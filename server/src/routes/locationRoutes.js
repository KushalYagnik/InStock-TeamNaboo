const express = require('express');
const router = express.Router();
const inventoryList = require('../data/inventory.json');
const warehouseList = require('../data/locations.json');
const uuid = require('uuid');

// get all warehouse
// route goes here

router.get('/warehouses', (req,res) => {
  res.status(200).json(warehouseList);
})


// get a specific inventory item
router.get('/warehouses/:warehouseid', (req, res) => {
  console.log(req.params)
  const targetWarehouse = warehouseList.find((object) => object.id === req.params.warehouseid);
  const targetInventory = inventoryList.find((object2) => object2.id === req.params.warehouseid);

    if (targetWarehouse || targetInventory) {
      res.status(200).json({
        WarehouseLocated: targetWarehouse,
        WarehouseInventory: targetInventory
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

//POST a warehouse item

router.post('/warehouses', (req,res) => {
console.log(req);

//insert if/else statement with error messages


const newWarehouse = {
      id: uuid.v4(),
      name: req.body.name,
      address: req.body.address,
      location: req.body.location,
      contact: req.body.contact,
      position: req.body.position,
      phone: req.body.phone,
      email: req.body.email,
      itemDesc: req.body.itemDesc,
}

// {
//   id: uuid.v4(),
//   name: req.body.nameId,
//   address: {
//       street: req.body.address,
//       location: req.body.location
//   },
//   contact: {
//       name: req.body.contact,
//       position: req.body.position,
//       phone: req.body.phone,
//       email: req.body.email
//   },
//   inventoryCategories: req.body.itemDesc
// }

  warehouseList.push(newWarehouse);
  res.json(warehouseList);

})


module.exports = router;