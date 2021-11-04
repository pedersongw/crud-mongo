module.exports = (app) => {
  const App = require("../Controllers/controller.js");

  app.post("/", App.create);

  app.get("/", App.findAll);

  app.delete("/", App.delete);

  app.put("/", App.update);
};
