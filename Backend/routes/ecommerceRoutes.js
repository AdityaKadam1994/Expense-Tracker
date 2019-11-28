var express = require("express");
var router = express.Router();

let ecommerce = require('../controllers/ecommerceController');

/* Routers */
router.get("/", ecommerce.getDetails);
router.get("/:id", ecommerce.getDetail);
router.post("/createPurchase", ecommerce.createPurchase);
router.put("/:id", ecommerce.updatePurchase);
router.delete("/:id", ecommerce.deletePurchase);

module.exports = router;