import React, { useEffect, useState } from "react";
import Image from "../components/Image";
import axios from "axios";
import ImageSearch from "../components/ImageSearch";
import CategorySearch from "../components/CategorySearch";
import Loading from "../components/Loading";
import LazyLoad from "react-lazy-load";

//main page of application - holds most of the api calls

export default function Main() {
  const [data, setData] = useState([]);
  const [mimeType, setMimeType] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() => {
    runSearch();
  }, []);

  const runSearch = async () => {
    try {
      const { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=21&page=100&order=DESC"
      );

      setData(data);
    } catch (error) {
      console.log("error in runSearch main: ", error);
    }
  };

  const searchFileType = async e => {
    e.persist();
    try {
      let { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        {
          params: {
            limit: 20,
            size: "full",
            mime_types: e.target.value,
            category_ids: searchCategory ? searchCategory : ""
          }
        }
      );
      setMimeType(e.target.value);
      setData(data);
    } catch (error) {
      console.log("error in main search file type: ", error);
    }
  };

  const searchByCategory = async e => {
    e.persist();
    try {
      let { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        {
          params: {
            limit: 20,
            size: "full",
            category_ids: e.target.value,
            mime_types: mimeType ? mimeType : ""
          }
        }
      );
      setSearchCategory(e.target.value);
      setData(data);
    } catch (error) {
      console.log("error in searchByCategory in Main: ", error);
    }
  };

  return (
    <div className="data-wrapper">
      <div className="search-bar-wrapper">
        <ImageSearch searchFileType={searchFileType} />
        <CategorySearch searchByCategory={searchByCategory} />
      </div>
      {data.length > 0 ? (
        data.map((item, i) => {
          return (
            <LazyLoad
              key={i}
              height={250}
              offsetVertical={500}
              debounce={false}
            >
              <Image image={item} />
            </LazyLoad>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
