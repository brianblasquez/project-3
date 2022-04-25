import React from "react";
import Header from "../header/Header";
import Results from "../results/Results";
import SearchBar from "../searchBar/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Results />
    </div>
  );
}

export default App;
