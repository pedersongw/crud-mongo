const mongoose = require("mongoose");

const EmailSchema = mongoose.Schema({
  email: String,
});

module.exports = mongoose.model("Email", EmailSchema);
