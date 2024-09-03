const { adduser } = require("../Controllers/UserController.js");

const { deleteuser } = require("../Controllers/UserController.js");
const { updateUser } = require("../Controllers/UserController.js");
const { getallUsers } = require("../Controllers/UserController.js");
const { getUserInfo } = require("../Controllers/UserController.js");
const { user } = require("../Controllers/UserController.js");
const authMidlleware = require("../Midleware/authMidleware.js");

const validator = require("../Zod/authValidator.js");
const Schema = require("../Zod/authocontroller.js");

const express = require("express");

const routes = express.Router();

routes.post("/adduser", validator(Schema), adduser);
routes.post("/user", getUserInfo);
routes.get("/sample", deleteuser);
routes.get("/home", updateUser);
routes.get("/contact", getallUsers);
routes.get("/userInfo", authMidlleware, user);

module.exports = routes;
