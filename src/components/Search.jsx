import React from "react";
import ProductList from "./ProductList";

function Search({ onChange }) {
  return (
    <div>
      <div class="flex items-center justify-between mb-12">
        <h4 class="mt-2 text-xl font-bold">Product List</h4>
        <input
          type="text"
          placeholder="Filter products..."
          class="search"
          id="lws-searchBook"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Search;
