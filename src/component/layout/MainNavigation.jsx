import React from "react";
import { Link } from "react-router-dom";
import style from "./mainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={style.header}>
      <div className={style.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/new_meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorite">My Favorite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
