import React from "react";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <NavBar />
      <Search />
      <ProductList />
    </div>
  );
}

export default App;
