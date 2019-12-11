const mongoose = require("mongoose");

const db =
  "mongodb+srv://admin:D0GMouXjd4CkrrjX@cluster0-kax9l.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log("MongoDB connection failed", err);
    } else {
      console.log("Suucessfully connected with mongo db..!");
    }
  }
);

module.exports = mongoose;
