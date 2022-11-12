import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="https://www.freeiconspng.com/thumbs/house-png/home-house-silhouette-icon-building--public-domain-pictures--20.png"
          alt="home"
          width="6%"
        />
      </Link>
    </div>
  );
};
