import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetail from "../components/Recipe/recipedetail";

const Recipe: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  return id ? <RecipeDetail id={id} /> : <p>Recipe ID not provided</p>;
};

export default Recipe;
