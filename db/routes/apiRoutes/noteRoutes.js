const { Router } = require("express");
const data = require("../../db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const router = Router();

router.get("/notes", (req, res) => {
  res.json(data);
});

router.delete("/notes/:id", (req, res) => {
  data = data.filter((el) => el.id !== req.params.id);
  fs.writeFile(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(data),
    function (err) {
      if (err) {
        res.status(404).json({ error: err });
      }
      res.json(data);
    }
  );
});

router.post("/notes", (req, res) => {
  const newNote = { ...req.body, id: uuidv4() };
  data.unshift(newNote);
  fs.writeFile(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(data),
    function (err) {
      if (err) {
        res.status(404).json({ error: err });
      }
      res.json(data);
    }
  );
});

module.exports = router;
