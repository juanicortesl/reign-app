import React, { ReactNode } from "react";
import "../App.css";
interface Props {
  data: any;
}

function NewsItem({ data }: Props) {
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
            {data.hours} hours ago by {data.autor}
          </p>
        </div>
        <h2 className="News-Title">{data.title}</h2>
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
