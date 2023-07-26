//Require the Library
const mongoose = require("mongoose");

//connect ot the database
mangoose.connect("mongodb://localhost/contacts_list_db");

//acquire the connection(to connect if it is successful)
const db = mongoose.connection;

// if error
db.on("error", console.error.bind(console, "error connecting to db"));

//else if server is up and running then  print the message
db.once("open", function () {
  console.log("successfully connected to the database");
});
