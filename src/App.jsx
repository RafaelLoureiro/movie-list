import React, { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./views/MovieDetail/MovieDetail";


function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App" style={{ backgroundColor: "#303030" }}>
      <Header onSubmit={(inputValue) => {
        setSearchValue(inputValue)
      }} />
      <Routes>
        <Route path="/" element={<Home searchValueProp={searchValue} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App
