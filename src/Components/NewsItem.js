import React from "react";
import classes from "./NewsItem.module.css";

function NewsItem(props) {
  let date = props.date.substring(0, 10);

  return (
    <div className={classes.newsItem}>
      <a href={props.url} target="_blank" rel="noreferrer">
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
