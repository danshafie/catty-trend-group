import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.scss";
export default function Heaader() {
  return (
    <div className={`${styles.header}`}>
      <h3 className={styles.headerThree}>
        <Link className={[styles.link, styles.title].join(" ")} to="/">
          Caturday
        </Link>
      </h3>
      <Link
        className={[styles.link, styles.linkFavorites].join(" ")}
        to="/favorites"
      >
        Favorites
      </Link>
    </div>
  );
}
