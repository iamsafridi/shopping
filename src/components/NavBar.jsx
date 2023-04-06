import React from "react";
import "../index.css";

function NavBar() {
  return (
    <div className="container">
      <a href="/">
        <img
          src="https://shoppingcorner.com.bd/_nuxt/img/logo.2cc0b97.png"
          alt="logo"
          width="150px"
          className="object-contain"
        />
      </a>
      <ul class="hidden md:flex items-center space-x-6">
        <li className="font-semibold cursor-pointer">Products</li>
        <li className="cursor-pointer">Wishlist</li>
        <li className="cursor-pointer">My Collection</li>
      </ul>
      <form className="flex items-center">
        <div className="group relative rounded-md bg-white">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Filter products..."
            className="search"
            id="lws-searchBook"
          />
        </div>
      </form>
    </div>
  );
}

export default NavBar;