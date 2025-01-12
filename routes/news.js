const express = require("express");

const router = express.Router();

const { getNews, searchNews } = require("../controllers/news/news.controllers");

router.get("/", getNews);
router.get("/search/:keyword", searchNews);

module.exports = router;
