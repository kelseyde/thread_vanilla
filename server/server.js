var express = require("express");
var app = express();
app.use(express.static(__dirname + '/../client/build'))

app.listen(3000, function () {
  console.log("App running");
})
