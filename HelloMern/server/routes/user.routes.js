const UserController = require("../controllers/user.controller");

module.exports = (app) => {
  app.get("/api/users", UserController.getAll);
  app.post("/api/users", UserController.createNew);
  app.get("/api/users/:id", UserController.getById);
  app.delete("/api/users/:id", UserController.deleteById);
  app.put("/api/users/:id", UserController.updateById);
} 