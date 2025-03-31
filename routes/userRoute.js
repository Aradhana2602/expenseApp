const express = require("express");
const { loginController, registerController } = require("../controllers/userController");

// Router object (Fixed)
const router = express.Router();

// POST || LOGIN
router.post("/login", loginController);

// POST || REGISTER
router.post("/register", registerController);

module.exports = router;
