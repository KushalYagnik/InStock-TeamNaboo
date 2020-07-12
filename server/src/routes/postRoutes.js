const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const warehouse = "../data/locations.json";
const inventoryItem = "../data/inventory.json";
const warehouseData = require(warehouse);
const inventoryData = require(inventoryItem)
const shortid = require('shortid');
const fs = require("fs");

// app.post("/", (req, res) => {
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
//     "description": description,
//     "ordered_by": warehouse[0].contact,
//     "last_ordered": date,
//     "quantity": quantity,
//     "location": `${warehouse[0].city}, ${warehouse[0].country}`,
//     "status": stock,
//     "key": createID(),
//     "warehouseID": warehouseId,
//     "categories": warehouse[0].inventoryCategories
//   }
//   inventoryData.push(newinventory);
//   writeJSONFile(inventoryItem,inventoryData);
//   return res.status(200).json(inventoryData);
// });

function writeJSONFile(filename, content) {
  console.log(filename, content);
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`changes saved to file ${filename}....`);
}
function createID() {
  return shortid.generate();
}
module.exports = {
    createID,
    writeJSONFile
}
module.exports = router;
