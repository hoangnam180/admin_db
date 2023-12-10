const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/create-user", userController.createUser);
router.get("/get-user-pagination", userController.getUserPagination);
module.exports = router;
