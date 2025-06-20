const express = require("express");
const router = express.Router();
const basicData = require("../jsons/basic.json");
const entranceData = require("../jsons/entrance.json");
const exitData = require("../jsons/exit.json");
const textData = require("../jsons/text.json");
const attentionData = require("../jsons/attention.json");
const backgroundData = require("../jsons/background.json");

router.get("/", async (req, res) => {
  res.render("index", {
    title: "Home",
    data: basicData,
  });
});

router.get("/entrances", async (req, res) => {
  res.render("entrances", {
    title: "Home",
    data: entranceData,
  });
});

router.get("/exits", async (req, res) => {
  res.render("exits", {
    title: "Home",
    data: exitData,
  });
});

router.get("/text", async (req, res) => {
  res.render("text", {
    title: "Home",
    data: textData,
  });
});

router.get("/attention", async (req, res) => {
  res.render("attention", {
    title: "Home",
    data: attentionData,
  });
});

router.get("/background", async (req, res) => {
  res.render("background", {
    title: "Home",
    data: backgroundData,
  });
});

module.exports = router;
