import React, { useEffect, useState } from "react";
import axios from "axios";

//select html element for category search

export default function CategorySearch({ searchByCategory }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `https://api.thecatapi.com/v1/categories`
      );

      setCategories(data);
    } catch (error) {
      console.log("error in category search: ", error);
    }
  };

  return (
    <div className="categories-search">
      {categories.length > 0 ? (
        <select onChange={searchByCategory}>
          <option disabled selected hidden>
            Select a category:
          </option>
          {categories.map((item, i) => {
            return (
              <option key={i} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      ) : null}
    </div>
  );
}
