var mongoose = require("./connection");
var seedData = require("./seeds");

var Team = mongoose.model("Team");

Team.remove({}).then(function(){
  Team.collection.insert(seedData).then(function(){
    process.exit();
  });
});
