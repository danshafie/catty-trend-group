import React from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { USER_ID } from "../config/keys";
import axios from "axios";
import styles from "../styles/Image.module.scss";

//favorite component to fav/unfav specific image

export default function Favorite({ item, favoritesPage, getFavorites }) {
  const handleFavoriteClick = async () => {
    try {
      let post_body = {
        image_id: item.id,
        sub_id: USER_ID
      };
      await axios.post("https://api.thecatapi.com/v1/favourites", post_body);
    } catch (error) {
      console.log("error in handleFavoriteClick in favorite: ", error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`https://api.thecatapi.com/v1/favourites/${item.id}`);
      getFavorites();
    } catch (error) {
      console.log("error in handleDeleteClick in Favorite:", error);
    }
  };

  return (
    <div
      className={`${styles.favorite} ${
        favoritesPage ? styles.favoritesPage : ""
      }`}
      onClick={favoritesPage ? handleDeleteClick : handleFavoriteClick}
    >
      {favoritesPage ? (
        <>
          <span>UnFav</span> <FaTrash />
        </>
      ) : (
        <>
          <span>Favorite</span> <FaHeart />{" "}
        </>
      )}
    </div>
  );
}

Favorite.defaultProps = {
  favoritesPage: false,
  item: {},
  getFavorites: () => {}
};
