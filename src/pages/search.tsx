/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import useFetch from "../hooks/use-fetch";
import { useEffect, useState } from "react";
import Results from "../components/Results/results";
import Nav from "../components/Navbar/navbar";
import { apiKey } from "../config/constants";

const Search: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);
  const { query } = useParams();
  const [getData, loading, error] = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`
  );

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResults(data.results);
    })();
  }, [getData]);

  return (
    <div className="wrapper">
      <Nav />
      <h3 className="heading title">
        Search results for <span>"{query}"</span>
      </h3>
      <Results data={results} loading={loading} error={error} />
    </div>
  );
};

export default Search;
