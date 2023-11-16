const express = require("express");
const controller = require("../controllers/task2Controller");
const router = express.Router();

router.get("/", controller.show);

module.exports = router;