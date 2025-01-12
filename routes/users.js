const express = require("express");

const router = express.Router();

const {
  createUser,
  loginUser,
} = require("../controllers/users/users.controllers");

const {
  getPreferences,
  setPreferences,
} = require("../controllers/preferences/preferences.controllers");

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/preferences", getPreferences);
router.put("/preferences", setPreferences);

module.exports = router;
