const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
let cors = require("cors");

const MONGO_STRING =
  "mongodb+srv://pedersongw:M8artinez@cluster0.clsug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_STRING, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.json({ message: "Server is running :D" });
// });

app.use(cors());

let PORT = 8080;

require("./Routes/routes.js")(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
