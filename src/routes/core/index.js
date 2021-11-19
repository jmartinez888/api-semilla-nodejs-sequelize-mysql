const { Router } = require("express");

const router = Router();

router.use("/register", require("./register.routes"));

module.exports = router;
