const mongoose = require("mongoose");

const url =
"mongodb://sudhan:sudhan2001@webdev-shard-00-00.gkale.mongodb.net:27017,webdev-shard-00-01.gkale.mongodb.net:27017,webdev-shard-00-02.gkale.mongodb.net:27017/Quora-clone?ssl=true&replicaSet=atlas-2lbp5w-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};