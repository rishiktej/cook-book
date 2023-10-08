import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (query) {
      navigate("/search/" + query);
    }
  }

  return (
    <nav className="flex justify-between items-center px-4 py-2">
      <Link to="/">
        <img src={logo} alt="logo" className="w-20" />
      </Link>
      <ul className="flex space-x-4 text-sm">
        <li>
          <NavLink to="/" className="text-black no-underline">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/ingredients" className="text-black no-underline">
            INGREDIENTS
          </NavLink>
        </li>
      </ul>
      <form onSubmit={submitHandler} className="inline-block relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search..."
          className="pl-10 pr-8 py-2 bg-white rounded-15px shadow-md border-0"
        />
      </form>
    </nav>
  );
};

export default Nav;
