// DEPENDENCIES
const express = require("express");
const router = express.Router();

// INDEX
router.get("/", (req, res) => {
  res.json({ status: "ok" });
});

// EXPORT
module.exports = router;
