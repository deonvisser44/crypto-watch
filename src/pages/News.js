import React, { useState, useEffect } from 'react'
import classes from './News.module.css'
import NewsItem from '../Components/NewsItem'
import Scroll from '../Components/Scroll'

function News() {
    const [articles, setArticles] = useState([])

    async function getNewsArticles(){
        const response = await fetch(
            'https://data.messari.io/api/v1/news'
        )
        if(!response.ok){
            const message = `An error occured: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json()
        setArticles(data.data);
        console.log(data.data);
    }

    useEffect(() => {
        getNewsArticles()
    }, [])

  return (
      <div className={classes.wrapper}>
          <div className={classes.newsPage}>
              <h1>CryptoWatch News</h1>
              {articles.map((article) => (
                  <NewsItem  url={article.url} title={article.title} date={article.published_at} source={article.author.name} tags={article.tags}/>
              ))}
          </div>
          <Scroll />
      </div>
    
  )
}

export default News