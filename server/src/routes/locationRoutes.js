const express = require('express');
const router = express.Router();
const inventoryList = require('../data/inventory.json');
const warehouseList = require('../data/locations.json');
let newPost = [];

// == Post /videos ==
router.post('/', (req, res) => {
  warehouseList.push({    
    "description": description,
    "ordered_by": warehouse[0].contact,
    "last_ordered": date,
    "quantity": quantity,
    "location": `${warehouse[0].city}, ${warehouse[0].country}`,
    "status": stock,
    "key": createID(),
    "warehouseID": warehouseId,
    "categories": warehouse[0].inventoryCategories
})
newPost = warehouseList[warehouseList.length-1];
res.json(newPost)
})

// post test route
// console.log("before the post")
// router.post("/", (req, res) => {
//   console.log("in the post")
//   // const {item,date,description,stock,quantity, warehouseId} = req.body
//   const {item} = req.body
//   const warehouse = warehouseData.filter(warehouse => {
//     if(warehouse.id === warehouseId) {
//       return true
//     } else {
//       return false
//     }
//   })
//   const newinventory = {
//     "item": item,
//     // "description": description,
//     // "ordered_by": warehouse[0].contact,
//     // "last_ordered": date,
//     // "quantity": quantity,
//     // "location": `${warehouse[0].city}, ${warehouse[0].country}`,
//     // "status": stock,
//     // "key": createID(),
//     // "warehouseID": warehouseId,
//     // "categories": warehouse[0].inventoryCategories
//   }
//   inventoryData.push(newinventory);
//   // writeJSONFile(inventoryItem,inventoryData);
//   return res.status(200).json(inventoryData);
// });


// get all warehouse
// route goes here
router.get('/', (req,res) => {
  res.status(200).json(warehouseList);
})

// get a specific inventory item
router.get('/warehouses/:warehouseid', (req, res) => {
  const targetWarehouse = locationList.find((object) => object.id === req.params.warehouseid);
  const targetInventory = inventoryList.find((object2) => object2.id === req.params.warehouseid);

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