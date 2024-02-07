const express = require("express");
const router = express.Router();
const notesRoutes = require("./noteRoutes");

router.use(notesRoutes);

module.exports = router;
