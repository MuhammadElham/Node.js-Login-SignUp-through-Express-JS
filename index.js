// const { log } = require("console");
// const express = require("express");
// const app = express();
// 1
// Middleware function to check for 'age' query parameter
// const middleWare = (req, res, next) => {
//   if (!req.query.name) res.send("Enter Your Name");
//   else if (req.query.name == "elham")  next();
//   else if (req.query.name != "elham") res.send("You are Not Elham");
// };

// // app.use(middleWare);

// app.get("/home", (req, res) => {
//   res.send("Home Page");
// });
// app.get("/about", middleWare, (req, res) => {
//   res.send("You are in About Page");
// });

// app.listen(5000, () => {
//   console.log("Server is Running");
// });

// 2 (signUP)
const { log } = require("console");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());

let dataBase = [];

// signUp
app.post("/signUp", (req, res) => {
  var { name, email, password } = req.body;
  let data = dataBase.push(req.body);
  res.send({
    status: 200,
    message: "Signup Successfully",
    data: dataBase,
  });
});

// Login
app.post("/login", (req, res) => {
  var flag = false;
  dataBase.map((data) => {
    if (req.body.email == data.email && req.body.password == data.password) {
      flag = true;
      res.send("Login Successfully!");
    }
  });
  if (flag == false) {
    res.send("Failed");
  }
});

app.listen(3000, () => {
  console.log("Server Run");
});
