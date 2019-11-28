const mongoose = require("mongoose");

const db = process.env.MONGO_URI;
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (err) {
    console.log("MongoDB connection failed", err);
  } else {
    console.log("Suucessfully connected with mongo db..!");
  }
});

module.exports = mongoose;
