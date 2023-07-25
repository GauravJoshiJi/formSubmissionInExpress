const express = require("express");
const port = 8000;
const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var contactList = [
  {
    name: "First",
    phone: "1234",
  },
  {
    name: "Sedond",
    phone: "1234",
  },
  {
    name: "Third",
    phone: "1234",
  },
];

app.get("/", function (req, res) {
  return res.render("home", {
    title: "My Contacts list",
    contact_list: contactList,
  });
});

app.get("/practice", function (req, res) {
  return res.render("practice", {
    title: "Let us play with ejs",
  });
});

app.post("/create-contact", function (req, res) {
  return res.redirect("/practice");
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in page : ", err);
    return;
  }
  console.log("Yup!, Express is working on port : ", port);
});
