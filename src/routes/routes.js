const express = require("express");
const router = express.Router();
const effectsData = require('../css_effects_full.json')

router.get("/", async (req, res) => {
  res.render("index", { 
    title: "Home",
    data: effectsData 
});
});

module.exports = router;
