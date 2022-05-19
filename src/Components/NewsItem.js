import React from "react";
import classes from "./NewsItem.module.css";

function NewsItem(props) {
  let date = props.date.substring(0, 10);


  return (
    <div className={classes.newsItem}>
      <a href={props.url} target="_blank" rel="noreferrer">
        <h3>
          {props.title}
        </h3>
      </a>
      <div className={classes.tagContainer}>
        {props.tags.map((tag) => (
          <div className={classes.tag}>{tag.toUpperCase()}</div>
        ))}
      </div>
      {props.image && <img src={props.image} alt={props.title} />}
      <p>{date}</p>
    </div>
  );
}

export default NewsItem;
