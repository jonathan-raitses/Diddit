const MongoClient = require("mongodb").MongoClient;

let _db;

module.exports = {
  connectToServer: function() {
    MongoClient.connect("mongodb://localhost:27017/MVP", { useNewUrlParser: true }, function(err, db) {
      if(err){
        console.log("There was an issue connecting to the database!: ", err);
        return;
      }
      _db = db;
      console.log("Connected to the database!");
    });
  },
  getDb: function() {
    return _db;
  }
};