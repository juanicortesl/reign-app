import React, { ReactNode } from "react";
import "../App.css";
interface Props {
  data: any;
  favoritesSelected: boolean;
}

function NewsItem({ data, favoritesSelected }: Props) {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const getHoursSince = (date: Date) => {
    const now = new Date().getTime();
    const hourInMilliseconds = 1000 * 60 * 60;
    return Math.round((now - date.getTime()) / hourInMilliseconds);
  };

  const setFavorite = () => {
    if (isFavorite) {
      localStorage.removeItem(`favorite_story_id:${data.story_id}`);
    } else {
      localStorage.setItem(`favorite_story_id:${data.story_id}`, "favorite");
    }
    setIsFavorite(!isFavorite);
  };

  const checkSavedFavorites = async () => {
    const savedFavorite = localStorage.getItem(
      `favorite_story_id:${data.story_id}`
    );
    if (savedFavorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  React.useEffect(() => {
    checkSavedFavorites();
  }, [data]);

  return (
    <div className={isFavorite || !favoritesSelected ? "News-Item" : "hidden"}>
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
          src={require(isFavorite
            ? "../img/iconmonstr-favorite-3@3x.png"
            : "../img/iconmonstr-favorite-2@3x.png")}
          className="like-icon"
          onClick={setFavorite}
        ></img>
      </div>
    </div>
  );
}

export default NewsItem;
