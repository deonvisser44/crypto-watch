import React from "react";
import classes from "./NewsItem.module.css";
import { Link } from "react-router-dom";

function NewsItem(props) {
  let date = props.date.substring(0, 10);

  const tags = ['Web-3', 'Bitcoin', 'Decentralized Finance']
  return (
    <div className={classes.newsItem}>
      <a href={props.url} target="_blank">
        <h3>
          {props.title} <span>|</span> {props.source}
        </h3>
      </a>
      <div className={classes.tagContainer}>
      {props.tags.map((tag) => (
            <div className={classes.tag}>{tag}</div>
        ))}
      </div>
        
      <p>{date}</p>
    </div>
  );
}

export default NewsItem;
