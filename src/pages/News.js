import React, { useState, useEffect } from "react";
import classes from "./News.module.css";
import NewsItem from "../Components/NewsItem";
import Scroll from "../Components/Scroll";
import loading from '../assets/loadergif.gif';

function News() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getNewsArticles() {
    setIsLoading(true);
    const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_75141d7e5a73a9bc4d6915e6b1556d20b889&q=cryptocurrency&language=en");
    if (!response.ok) {
      const message = `An error occured: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    setArticles(data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    getNewsArticles();
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.newsPage}>
        <h1>CryptoWatch News</h1>
        {isLoading && <div className={classes.loadingSpinner}><img src={loading} alt="loading" /></div>}
        {articles && articles.map((article) => (
          <NewsItem
            url={article.link}
            title={article.title}
            image={article.image_url}
            date={article.pubDate}
            tags={article.category}
          />
        ))}
      </div>
      <Scroll />
    </div>
  );
}

export default News;
