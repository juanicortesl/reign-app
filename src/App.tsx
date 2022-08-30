import React from "react";
import NewsList from "./NewsList/NewsList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <h1>Hacker News</h1>
      </div>
      <NewsList></NewsList>
    </div>
  );
}

export default App;
