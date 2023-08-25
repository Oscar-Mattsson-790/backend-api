const express = require("express");
const { getAllUser, login, signup } = require("../controllers/user");

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;