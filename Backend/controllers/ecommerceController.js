const mongoconn = require("../config");
const ecommerceSchema = require("../model/ecommerceModel");

const ecom_coll = mongoconn.model("ecommerce", mongoconn.Schema(ecommerceSchema));

// Get all details
const getDetails = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  ecom_coll.find({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(data);
    }
    res.send(data);
  });
};

// Get one particular details by mobile number
const getDetail = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let id = req.params.id;
  ecom_coll.find({ _id: id }, (err, data) => {
    console.log(data);
    res.send(data);
  });
};

// Create Purchase information in database
const createPurchase = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let purchaseData = {};
  purchaseData["date"] = req.body.date;
  purchaseData["particular"] = req.body.particular;
  purchaseData["quantity"] = req.body.quantity;
  purchaseData["price"] = req.body.price;
  purchaseData["transaction_status"] = req.body.transaction_status;
  purchaseData["paymentmode"] = req.body.paymentmode;
  console.log("create purchase detail : ", purchaseData);
  ecom_coll.insertMany(purchaseData, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  res.send({ success: true });
};

// Update Purchase information
const updatePurchase = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let id = req.params.id;
  console.log(id);
  let purchaseData = {};
  purchaseData["date"] = req.body.date;
  purchaseData["particular"] = req.body.particular;
  purchaseData["quantity"] = req.body.quantity;
  purchaseData["price"] = req.body.price;
  purchaseData["transaction_status"] = req.body.transaction_status;
  purchaseData["paymentmode"] = req.body.paymentmode;
  ecom_coll.updateOne(
    { _id: id },
    { $set: { purchaseData } },
    { upsert: true },
    (err, raw) => {
      if (err) {
        console.log(err);
      } else {
        console.log(raw);
      }
    }
  );
  res.send({ success: true, msg: "Updated Successfully" });
};

// Delete Purchase Record
const deletePurchase = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let id = req.params.id;
  console.log(id);
  ecom_coll.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log("error in deleting", err);
    }
  });
  res.send({ 'sucsess': true, 'msg': 'Record deleted successfully' });
};

module.exports = {
  getDetails,
  getDetail,
  createPurchase,
  updatePurchase,
  deletePurchase
};