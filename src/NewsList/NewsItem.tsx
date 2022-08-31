import React, { ReactNode } from "react";
import "../App.css";
interface Props {
  data: any;
}

function NewsItem({ data }: Props) {
  const getHoursSince = (date: Date) => {
    const now = new Date().getTime();
    const hourInMilliseconds = 1000 * 60 * 60;
    return Math.round((now - date.getTime()) / hourInMilliseconds);
  };

  return (
    <div className="News-Item">
      <div className="News-Item-Col-1">
        <div className="News-Item-Info-Row">
          <div className="img-frame">
            <img
              src={require("../img/iconmonstr-time-2@3x.png")}
              className={"clock-icon"}
            />
          </div>

          <p>
            {getHoursSince(new Date(data.created_at))} hours ago by{" "}
            {data.author}
          </p>
        </div>
        <h2 className="News-Title">{data.story_title || data.title}</h2>
      </div>
      <div className="News-Item-Col-2">
        <img
          src={require("../img/iconmonstr-favorite-3@3x.png")}
          className="like-icon"
        ></img>
      </div>
    </div>
  );
}

export default NewsItem;
