/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import Results from "../components/Results/results";
import Nav from "../components/Navbar/navbar";
import { apiKey } from "../config/constants";

interface CuisineParams {
  cuisine: string;
  [key: string]: string;
}

const Cuisine: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);
  const { cuisine } = useParams<CuisineParams>();

  const [getData, loading, error] = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${cuisine}`
  );

  useEffect(() => {
    if (!apiKey) {
      console.error("API key is missing!"); // Handle the case when the API key is not provided
      return;
    }

    (async () => {
      const data = await getData();
      setResults(data.results);
    })();
  }, [getData, apiKey, cuisine]);

  return (
    <div className="wrapper">
      <Nav />
      <h2 className="heading title">
        {cuisine && cuisine[0].toUpperCase() + cuisine.slice(1)} foods
      </h2>
      <Results loading={loading} error={error} data={results} />
    </div>
  );
};

export default Cuisine;
