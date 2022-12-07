const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//////////////// Calculator

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

//////////////// BMI Calculator

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var bmiWeight = Number(req.body.weight);
  var bmiHeight = Number(req.body.height);
  bmiResult = (bmiWeight / Math.pow(bmiHeight / 100, 2)).toFixed(1);
  res.send("Your BMI calculation is " + bmiResult);
});

//////////////// Listening on port 3000

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
