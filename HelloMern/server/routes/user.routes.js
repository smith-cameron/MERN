const UserController = require("../controllers/user.controller");

module.exports = (app) => {
  app.get("/api/users", UserController.getAll);
  app.post("/api/users", UserController.createNew);
}