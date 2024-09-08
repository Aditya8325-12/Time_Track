const express = require("express");
const adminRoutes = express.Router();
const authMiddleware = require("../Midleware/authMidleware.js");
const { allUserData } = require("../Controllers/adminController.js"); // Ensure this path is correct
const { deleteUser } = require("../Controllers/adminController.js"); // Ensure this path is correct
const { updateuser } = require("../Controllers/adminController.js");
const { gettotalusersInfo } = require("../Controllers/adminController.js");
const { getAllContact } = require("../Controllers/adminController.js");
const { DeleteContact } = require("../Controllers/adminController.js");

adminRoutes.get("/alluser", authMiddleware, allUserData);
adminRoutes.delete("/deleteuser", deleteUser);
adminRoutes.patch("/updateuser", updateuser);
adminRoutes.get("/totalusersinfo", gettotalusersInfo);
adminRoutes.get("/getcontact", authMiddleware, getAllContact);
adminRoutes.delete("/deletecontact", DeleteContact);

module.exports = adminRoutes;
