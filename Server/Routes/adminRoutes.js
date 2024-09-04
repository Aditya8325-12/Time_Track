const express = require("express");
const adminRoutes = express.Router();
const authMiddleware = require("../Midleware/authMidleware.js");
const { allUserData } = require("../Controllers/adminController.js"); // Ensure this path is correct
const { deleteUser } = require("../Controllers/adminController.js"); // Ensure this path is correct

adminRoutes.get("/alluser", authMiddleware, allUserData);
adminRoutes.delete("/deleteuser", deleteUser);

module.exports = adminRoutes;
