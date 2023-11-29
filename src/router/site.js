const express = require("express");
const siteControllers = require("../controller/siteControllers");
const router = express.Router();

router.get("/", siteControllers.index);
router.get("/dashboard", siteControllers.dashboard);
router.get("/orders", siteControllers.orders);
router.get("/product", siteControllers.product);
router.get("/customer", siteControllers.customer);
router.get("/input", siteControllers.input);
router.get("/revenue", siteControllers.revenue);
router.get("/profit", siteControllers.profit);
router.get("/pos", siteControllers.pos);
router.get("/setting", siteControllers.setting);

module.exports = router;
