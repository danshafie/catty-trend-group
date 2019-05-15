import React, { useState } from "react";
import Favorite from "./Favorite";
import styles from "../styles/Image.module.scss";

//image component with lazyload stylings

export default function Image({ image, favoritesPage, getFavorites }) {
  const [loaded, setLoaded] = useState(false);

  const runOnLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={styles.imageContainer}>
      <img
        onLoad={runOnLoad}
        className={`${styles.catImage} ${loaded ? styles.loaded : ""}`}
        alt={`cute picture of a cat`}
        src={image.url || image.image.url}
      />
      <Favorite
        item={image}
        favoritesPage={favoritesPage}
        getFavorites={getFavorites}
      />
    </div>
  );
}
