const mongoose = require("mongoose");
const { mongoURI } = require("./keys");

mongoose.promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/quackchat",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  mongoURI
);

mongoose.set("debug", true);
module.exports = mongoose.connection;
