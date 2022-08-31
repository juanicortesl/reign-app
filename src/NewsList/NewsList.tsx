import React from "react";
import {
  convertCompilerOptionsFromJson,
  textChangeRangeNewSpan,
} from "typescript";
import "../App.css";
import NewsItem from "./NewsItem";

function NewsList() {
  const [newsData, setNewsData] = React.useState([]);
  const [selectedNews, setSelectedNews] = React.useState("");
  const getNewsData = async () => {
    console.log("getting news");
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${selectedNews}&page=0`
    );
    const json = await res.json();
    setNewsData(json.hits);
  };
  React.useEffect(() => {
    getNewsData();
  }, [selectedNews]);
  const changeSelectedNews = (event: any) => {
    console.log("changing news");
    setSelectedNews(event.target.value);
  };
  return (
    <div className="News-List">
      <div className="custom-select">
        <select
          placeholder="Select your news"
          value={selectedNews}
          onChange={changeSelectedNews}
        >
          <option value="angular">Angular</option>
          <option value="reactjs">React</option>
          <option value="vuejs">VueJS</option>
        </select>
      </div>

      <div className="News-List-Wrapper">
        {newsData.map((news, index) => {
          return <NewsItem key={index} data={news}></NewsItem>;
        })}
      </div>
    </div>
  );
}

export default NewsList;
