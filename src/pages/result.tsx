/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import Nav from "../components/Navbar/navbar";
import useFetch from "../hooks/use-fetch";
import { useState, useEffect } from "react";
import Results from "../components/Results/results";
import { apiKey } from "../config/constants";
interface LocationState {
  type?: string;
  cuisine?: string;
  ingredients: { name: string }[];
}

const Result: React.FC = () => {
  const location = useLocation();
  const { type, cuisine, ingredients } = location.state as LocationState;

  const ingredientParam = ingredients.map((item) => item.name).join(",");

  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${ingredientParam}`;

  if (type) url += "&type=" + type;
  if (cuisine) url += "&cuisine=" + cuisine;

  const [results, setResults] = useState<any[]>([]);
  const [getRecipes, loading, error] = useFetch(url);

  useEffect(() => {
    (async () => {
      const data = await getRecipes();
      setResults(data.results);
    })();
  }, [getRecipes]);

  return (
    <div className="wrapper">
      <Nav />
      <h2 className="heading" style={{ marginTop: "1rem" }}>
        Results
      </h2>
      <Results loading={loading} error={error} data={results} />
    </div>
  );
};

export default Result;
