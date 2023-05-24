const express = require("express");
//const router = express.Router();
router = express.Router();

corporateRoute = require("../api/coporate");

router.get("/", corporateRoute.corporate);

module.exports = router;