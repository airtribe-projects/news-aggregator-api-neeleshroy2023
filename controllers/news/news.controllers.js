const cache = require("memory-cache");

const newsAggregatorJob = require("../../jobs/newsAggregatorJob");

setInterval(newsAggregatorJob, 10 * 30 * 1000);
newsAggregatorJob();

const getNews = async (req, res) => {
  if (!req.user) {
    return res.status(404).json({ error: "User not found." });
  }

  const cachedNews = await cache.get("news");
  if (cachedNews) {
    return res.status(200).json({
      news: cachedNews.articles,
    });
  } else {
    return res.status(500).json({ error: "News not available." });
  }
};

const searchNews = (req, res) => {
  if (!req.user) {
    return res.status(404).json({ error: "User not found." });
  }

  const cachedNews = cache.get("news");
  if (cachedNews) {
    const keyword = req.params.keyword.toLowerCase();

    const filteredNews = cachedNews.articles.filter((article) => {
      return (
        article?.title?.toLowerCase().includes(keyword) ||
        article?.description?.toLowerCase().includes(keyword)
      );
    });
    return res.status(200).json({
      news: filteredNews,
    });
  } else {
    return res.status(500).json({ error: "News not available." });
  }
};

module.exports = {
  getNews,
  searchNews,
};
