import React from "react";
import { Header } from "./Header";
import './home.css';
import './Search.css';

export const SearchPage = () => {
  return (
    <div className="containerSearch">
      <div className="home">
        <Header />
      </div>
      <div className="textcentre">
        <h4>Type to search</h4>
        <br />
        <input type="text" placeholder="type text & press enter..." size="50" />
        <br />
        <p>Showing 0 results</p>
      </div>
    </div>
  );
};
