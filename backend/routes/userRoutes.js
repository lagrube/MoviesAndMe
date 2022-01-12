const router = require("express").Router();

const { default: axios } = require("axios");
// Controllers
const authController = require("../controllers/authController");

// JWT
const { authToken } = require("../middleware/authMiddleware");

// Auth
router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
