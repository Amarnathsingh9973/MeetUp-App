import React from "react";
import { Link } from "react-router-dom";
import style from "./mainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
function MainNavigation() {
  const favoriteCount = useContext(FavoritesContext);
  return (
    <header className={style.header}>
      <div className={style.logo}>Let's Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/new_meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorite">
              My Favorite{" "}
              <span className={style.badge}>
                {favoriteCount.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
