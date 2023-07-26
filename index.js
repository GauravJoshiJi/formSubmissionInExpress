const express = require("express");
const port = 8000;
const app = express();

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(express.static("assets"));

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
  //   console.log(req.body);
  //   console.log(req.body.name);
  //   console.log(req.body.phone);

  contactList.push({
    name: req.body.name,
    phone: req.body.phone,
  });
  return res.redirect("/");
});

app.get("/delete-contact/", function (req, res) {
  console.log(req.query);
  let phone = req.query.phone;

  let contactIndex = contactList.findIndex((contact) => contact.phone == phone);

  if (contactIndex != -1) {
    contactList.splice(contactIndex, 1);
  }

  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in page : ", err);
    return;
  }
  console.log("Yup!, Express is working on port : ", port);
});
