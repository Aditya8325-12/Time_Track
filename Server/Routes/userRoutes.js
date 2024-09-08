const { adduser } = require("../Controllers/UserController.js");

const { deleteuser } = require("../Controllers/UserController.js");
const { updateUser } = require("../Controllers/UserController.js");
const { getallUsers } = require("../Controllers/UserController.js");
const { getUserInfo } = require("../Controllers/UserController.js");
const { user } = require("../Controllers/UserController.js");
const { AddContact } = require("../Controllers/UserController.js");

// const {}
const authMidlleware = require("../Midleware/authMidleware.js");

const { validator, contactValidator } = require("../Zod/authValidator.js");
const { authoSchema, contactSchema } = require("../Zod/authocontroller.js");

const express = require("express");

const routes = express.Router();

routes.post("/adduser", validator(authoSchema), adduser);
routes.post("/user", getUserInfo);
routes.get("/sample", deleteuser);
routes.get("/home", updateUser);
routes.get("/contact", getallUsers);
routes.get("/userInfo", authMidlleware, user);
routes.post("/contact", contactValidator(contactSchema), AddContact);

module.exports = routes;
