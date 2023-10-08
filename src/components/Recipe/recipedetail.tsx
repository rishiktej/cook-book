import { useEffect, useState } from "react";
import Nav from "../Navbar/navbar";
import useFetch from "../../hooks/use-fetch";
import placeholder from "./placeholder.png";
import { apiKey } from "../../config/constants";

interface RecipeDetailProps {
  id: string;
}

interface ExtendedIngredient {
  original: string;
}

interface RecipeDetailData {
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: ExtendedIngredient[];
  instructions?: string;
  summary?: string;
}

export default function RecipeDetail({ id }: RecipeDetailProps) {
  const [detail, setDetail] = useState<RecipeDetailData | undefined>();

  const [getInfo, loading, error] = useFetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  );

  useEffect(() => {
    (async () => {
      const data = await getInfo();
      setDetail(data);
    })();
  }, [getInfo]);

  let content;

  if (loading) {
    content = <p className="text-center">Loading...</p>;
  } else {
    content = (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">{detail?.title}</h1>
        <div className="mb-4">
          <img
            src={detail?.image ? detail.image : placeholder}
            alt={detail?.title}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="text-gray-700 font-semibold mb-4">
          <p>
            <strong>Ready in:</strong> {detail?.readyInMinutes} mins
          </p>
          <p>
            <strong>Servings:</strong> {detail?.servings}
          </p>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg mb-4">
          <h2 className="text-xl mb-2">Ingredients</h2>
          <ul className="list-disc ml-6">
            {detail?.extendedIngredients.map((item) => (
              <li key={item.original}>{item.original}</li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg mb-4">
          <h2 className="text-xl mb-2">Instructions</h2>
          {detail?.instructions ? (
            <div
              dangerouslySetInnerHTML={{ __html: detail?.instructions }}
              className="mb-4"
            />
          ) : (
            <p className="mb-4">No instructions</p>
          )}
        </div>

        <div className="bg-blue-200 p-4 rounded-lg">
          <h2 className="text-xl mb-2">Summary</h2>
          <p
            dangerouslySetInnerHTML={{ __html: detail?.summary }}
            className="mb-4"
          />
        </div>
      </div>
    );
  }

  if (error) {
    content = <h1 className="text-center">{error}</h1>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />
      <div className="container mx-auto py-8 px-4">{content}</div>
    </div>
  );
}
