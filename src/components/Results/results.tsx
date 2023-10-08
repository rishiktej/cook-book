/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Popular from "../Popular/popular";

interface ResultsProps {
  data: any[];
  loading: boolean;
  error: string | null;
}

const Results: React.FC<ResultsProps> = ({ data, loading, error }) => {
  let content: React.ReactNode = <p>Loading...</p>;

  if (loading) {
    content = <p>Loading...</p>;
  } else if (data.length === 0) {
    content = <p>No results found.</p>;
  } else {
    content = (
      <div className="results grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => {
          return <Popular key={item.id} recipe={item} />;
        })}
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return <>{content}</>;
};

export default Results;
