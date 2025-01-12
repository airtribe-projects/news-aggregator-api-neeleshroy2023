require("dotenv").config();
const cache = require("memory-cache");
const logger = require("../utils/logger");

const newsAggregatorJob = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    );

    if (!response.ok) {
      logger.error("Error fetching news:", response.statusText);
      return;
    }

    const results = await response.json();
    cache.put("news", results);
  } catch (error) {
    logger.error("Error fetching news:", error);
  }
};

module.exports = newsAggregatorJob;
