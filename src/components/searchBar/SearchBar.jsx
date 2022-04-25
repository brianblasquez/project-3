import React, { useState } from "react";
import { ReactComponent as IlustraSearch } from "../../images/ilustra_header.svg";
import "./SearchBar.css";
import iconSearch from "../../images/icon-search-mod-noc.svg";

function SearchBar() {
  const [inputAnswer, setInputAnswer] = useState("");

  return (
    <div className="searchBar">
      <h2>¡Inspirate y busca mejores GIFS!</h2>
      <IlustraSearch />
      <div className="containerSearch">
        <input type="text" />
        <button className="buttonSearch">
          <img src={iconSearch} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
