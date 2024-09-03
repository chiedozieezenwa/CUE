import { useState } from "react";
import { searchIcon } from "../../../../assets";
import design from "./design.module.css";

export const DashSearchbar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className={design.container}>
      <form action="" className={design["search-bar"]}>
        <input
          className={design.searchInput}
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className={design["search-icon-button"]}>
          <img
            src={searchIcon}
            alt="Search Icon"
            className={design["search-icon"]}
          />
        </button>
      </form>
    </div>
  );
};
