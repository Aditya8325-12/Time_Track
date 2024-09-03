const express = require("express");
const adminRoutes = express.Router();
const authMiddleware = require("../Midleware/authMidleware.js");
const { allUserData } = require("../Controllers/adminController.js"); // Ensure this path is correct

adminRoutes.get("/alluser", authMiddleware, allUserData);

module.exports = adminRoutes;
