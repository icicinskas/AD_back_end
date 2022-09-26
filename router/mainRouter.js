const express = require("express");
const router = express.Router();

const {
  register,
  login,
  autologin,
  addImage,
  users,
} = require("../controller/mainController");

const { validateRegister } = require("../middleware/validator");

router.post("/register", validateRegister, register);
router.post("/login", login);
router.get("/autologin", autologin);
router.post("/addImage", addImage);

router.get("/users", users);

module.exports = router;
