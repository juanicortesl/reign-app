import React from "react";
import "../App.css";
import NewsItem from "./NewsItem";

function NewsList() {
  const [newsData, setNewsData] = React.useState([
    {
      autor: "author",
      hours: 3,
      title: "Event-driven state management in React using Storeon",
    },
    {
      autor: "author",
      hours: 3,
      title: "Event-driven state management in React using Storeon",
    },
    {
      autor: "author",
      hours: 3,
      title: "Event-driven state management in React using Storeon",
    },
    {
      autor: "author",
      hours: 3,
      title: "Event-driven state management in React using Storeon",
    },
    {
      autor: "author",
      hours: 3,
      title: "Event-driven state management in React using Storeon",
    },
    {
      autor: "author",
      hours: 3,
      title: "Event-driven state management in React using Storeon",
    },
    {
      autor: "author",
      hours: 3,
      title: "Event-driven state management in React using Storeon",
    },
    {
      autor: "author",
      hours: 3,
      title: "Event-driven state management in React using Storeon",
    },
  ]);
  return (
    <div className="News-List">
      <div className="News-List-Wrapper">
        {newsData.map((news, index) => {
          return <NewsItem key={index} data={news}></NewsItem>;
        })}
      </div>
    </div>
  );
}

export default NewsList;
