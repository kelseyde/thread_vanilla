var MongoClient = require("mongodb").MongoClient;

var queryHelper = {
  url: "mongodb://localhost:27017/threads",
  all: function (result) {
    MongoClient.connect(this.url, function (err, db) {
      var threadCollection = db.collection("threads");

      threadCollection.find().toArray(function (err, docs) {
        result(docs);
      });
    });
  }
}

module.exports = queryHelper;
