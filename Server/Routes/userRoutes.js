const { adduser } = require("../Controllers/UserController.js");

const { deleteuser } = require("../Controllers/UserController.js");
const { updateUser } = require("../Controllers/UserController.js");
const { getallUsers } = require("../Controllers/UserController.js");
const { getUserInfo } = require("../Controllers/UserController.js");
const express = require("express");

const routes = express.Router();

routes.post("/adduser", adduser);
routes.post("/user", getUserInfo);
routes.get("/sample", deleteuser);
routes.get("/home", updateUser);
routes.get("/contact", getallUsers);

module.exports = routes;
