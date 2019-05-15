import React from "react";

//select dropdown for type of image

export default function ImageSearch({ searchFileType }) {
  return (
    <div className="dropdown-wrapper">
      <select onChange={searchFileType}>
        <option disabled selected hidden>
          Select type of image:
        </option>
        <option value="gif">gif</option>
        <option value="jpeg,png">jpeg,png</option>
        <option value="gif,jpeg,png">all</option>
      </select>
    </div>
  );
}
