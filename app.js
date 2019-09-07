var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  var campgrounds = [
    {
      name: "nachiket ",
      image: "http://farm9.staticflickr.com/8337/8241913870_77dae6d471_m.jpg"
    },
    {
      name: "nachiket ",
      image: "http://farm9.staticflickr.com/8337/8241913870_77dae6d471_m.jpg"
    }
  ];

  res.render("campgrounds", { campgrounds: campgrounds });
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, function() {
  console.log("server is running!");
});
