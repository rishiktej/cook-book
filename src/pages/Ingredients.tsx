/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Nav from "../components/Navbar/navbar";
import Ingredient from "../components/Ingredient/ingredient";
import { apiKey } from "../config/constants";

const cuisines: string[] = [
  "African",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

const types: string[] = [
  "main course",
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
  "breakfast",
  "soup",
  "beverage",
  "sauce",
  "marinade",
  "fingerfood",
  "snack",
  "drink",
];

const Ingredients: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [error, setError] = useState("");

  const getIngredients = useCallback(async () => {
    setLoading(true);
    setError("");
    const response = await fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${apiKey}&query=${search}&number=5&metaInformation=true`
    );
    if (!response.ok) {
      setLoading(false);
      setError("Something went wrong");
      return;
    }
    const data = await response.json();
    setItems(data);
    setLoading(false);
  }, [search]);

  useEffect(() => {
    if (!search) return;
    const timer = setTimeout(() => {
      getIngredients();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [search, getIngredients]);

  function removeInge(id: string) {
    setIngredients((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  const [type, setType] = useState("");
  const [cuisine, setCuisine] = useState("");

  return (
    <div className="wrapper">
      <Nav />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full flex items-center max-w-2xl mx-auto mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2"
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
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search for ingredients..."
            className="block w-full bg-white pl-12 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {search && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-2xl mx-auto bg-white rounded-lg p-4 absolute border border-gray-300 shadow-md top-20 left-1/2 transform -translate-x-1/2 z-10"
          >
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : error ? (
              <p className="text-center">Something went wrong</p>
            ) : items.length === 0 && !loading ? (
              <p className="text-center">No results found</p>
            ) : (
              items.map((item) => {
                return (
                  <button
                    onClick={() => {
                      setIngredients((prev) => {
                        return [
                          ...prev.filter((inge) => inge.id !== item.id),
                          item,
                        ];
                      });
                      setSearch("");
                    }}
                    key={item.id}
                    className="w-full py-2 text-left hover:bg-gray-100"
                  >
                    {item.name}
                  </button>
                );
              })
            )}
          </motion.div>
        )}
      </div>

      <h2 className="text-2xl font-bold mx-4 mt-8">Ingredients</h2>
      <div className="flex flex-wrap mx-4 mt-4">
        {ingredients.length === 0 ? (
          <p>No ingredients selected.</p>
        ) : (
          ingredients.map((item) => {
            return (
              <Ingredient
                key={item.id}
                item={item}
                onClick={() => {
                  removeInge(item.id);
                }}
              />
            );
          })
        )}
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8 mt-8">
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          className="border rounded-md px-4 py-2 bg-white"
        >
          <option value="" disabled>
            Meal Type
          </option>
          {types.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <select
          value={cuisine}
          onChange={(e) => {
            setCuisine(e.target.value);
          }}
          className="border rounded-md px-4 py-2 bg-white"
        >
          <option value="" disabled>
            Cuisine
          </option>
          {cuisines.map((cuisine) => {
            return (
              <option key={cuisine} value={cuisine.toLowerCase()}>
                {cuisine}
              </option>
            );
          })}
        </select>
      </div>
      {ingredients.length > 0 && (
        <Link
          className="block text-center bg-blue py-2 px-4 text-black font-semibold mx-auto mt-4 rounded-md"
          to="/result"
          state={{
            cuisine,
            type,
            ingredients,
          }}
        >
          Search
        </Link>
      )}
    </div>
  );
};

export default Ingredients;
