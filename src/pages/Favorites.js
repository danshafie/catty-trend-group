import React, { useEffect, useState } from "react";
import axios from "axios";
import LazyLoad from "react-lazy-load";
import Image from "../components/Image";
import Loading from "../components/Loading";

//favorites page

export default function Favorites() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    try {
      const query_params = {
        limit: 20,
        order: "DESC",
        page: 0
      };
      const { data } = await axios.get(
        "https://api.thecatapi.com/v1/favourites",
        { params: query_params }
      );
      setData(data);
    } catch (error) {
      console.log("error in getfavorites in Favorites: ", error);
    }
  };
  return (
    <div className="data-wrapper">
      {data.length > 0 ? (
        data.map((item, i) => {
          return (
            <LazyLoad
              key={i}
              height={250}
              offsetVertical={500}
              debounce={false}
            >
              <Image
                image={item}
                favoritesPage={true}
                getFavorites={getFavorites}
              />
            </LazyLoad>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
