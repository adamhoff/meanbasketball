var mongoose = require("mongoose");

var TeamSchema = new mongoose.Schema(
  {
    name: String,
    city: String
  }
);

mongoose.model("Team", TeamSchema);
mongoose.connect("mongodb://localhost/basketball")

module.exports = mongoose;
