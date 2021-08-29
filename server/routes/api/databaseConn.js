const mongoose = require("mongoose");

var connection = mongoose
  .connect(
    "Mongo Database",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDb connected...");
  });

module.exports = connection;
