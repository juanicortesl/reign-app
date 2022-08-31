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
  const [selectedPage, setSelectedPage] = React.useState(1);
  const [pages, setPages] = React.useState([1, 2, 3, 4, 5, 6, 7, "...", 50]);
  const [maxPage, setMaxPage] = React.useState(50);
  const [favoritesSelected, setFavoritesSelected] = React.useState(false);
  const getNewsData = async () => {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${selectedNews}&page=${
        selectedPage - 1
      }`
    );
    const json = await res.json();
    setNewsData(
      json.hits.filter((story: any) => {
        return story.story_title && story.author && story.created_at;
      })
    );
    setMaxPage(json.nbPages);
  };
  const changeSelectedNews = (event: any) => {
    setSelectedNews(event.target.value);
  };
  const selectPage = (page: any) => {
    if (page !== "...") {
      setSelectedPage(Math.min(Math.max(parseInt(page), 1), maxPage));
      if (page <= 5) {
        setPages([1, 2, 3, 4, 5, 6, 7, "...", maxPage]);
      } else if (page > 5 && page < maxPage - 7) {
        setPages([
          1,
          2,
          "...",
          page - 1,
          page,
          page + 1,
          "...",
          maxPage - 1,
          maxPage,
        ]);
      } else {
        setPages([
          1,
          "...",
          maxPage - 7,
          maxPage - 6,
          maxPage - 5,
          maxPage - 4,
          maxPage - 3,
          maxPage - 2,
          maxPage - 1,
          maxPage,
        ]);
      }
    }
  };
  React.useEffect(() => {
    getNewsData();
  }, [selectedNews, selectedPage]);

  return (
    <div>
      <div className="News-List">
        <div className="Favs-Selector">
          <div
            className={
              !favoritesSelected
                ? "Selector Left Selected-Selector"
                : "Selector Left"
            }
            onClick={() => {
              setFavoritesSelected(false);
            }}
          >
            All
          </div>
          <div
            className={
              favoritesSelected
                ? "Selector Right Selected-Selector"
                : "Selector Right"
            }
            onClick={() => {
              setFavoritesSelected(true);
            }}
          >
            My Faves
          </div>
        </div>
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
            return (
              <NewsItem
                key={index}
                data={news}
                favoritesSelected={favoritesSelected}
              ></NewsItem>
            );
          })}
        </div>
      </div>
      <div className="Pagination-Row">
        <div
          className="Pagination-Item"
          onClick={() => {
            selectPage(selectedPage - 1);
          }}
        >
          {"<"}
        </div>
        {pages.map((page, index) => {
          return (
            <div
              className={
                selectedPage === page
                  ? "Pagination-Item selected"
                  : "Pagination-Item"
              }
              key={index}
              onClick={() => {
                selectPage(page);
              }}
            >
              {page}
            </div>
          );
        })}
        <div
          className="Pagination-Item"
          onClick={() => {
            selectPage(selectedPage + 1);
          }}
        >
          {">"}
        </div>
      </div>
    </div>
  );
}

export default NewsList;
