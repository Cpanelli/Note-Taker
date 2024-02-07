const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/notes", (request, response) => {
    const notesFilePath = path.resolve(__dirname, "../../public/notes.html");
    response.sendFile(notesFilePath);
});

router.get("/", (request, response) => {
    const indexPath = path.resolve(__dirname, "../../public/index.html");
    response.sendFile(indexPath);
});

module.exports = router;
