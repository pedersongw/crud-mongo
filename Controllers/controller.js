const Email = require("../Models/email.js");

// Create and Save a new Message
exports.create = (req, res) => {
  const message = new Email({
    email: req.body["email"],
  });
  console.log(req.body["email"]);
  message
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
};

exports.findAll = (req, res) => {
  Email.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};

exports.update = (req, res) => {
  console.log(req.body);
  const id = { _id: req.body["id"] };
  const email = { email: req.body["email"] };
  Email.findOneAndUpdate(id, email)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.delete = (req, res) => {
  Email.deleteOne({ _id: req.body["id"] }, function (err) {
    if (err) console.log(err);
    console.log("Successful deletion");
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
