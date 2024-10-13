import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams(); // Получаем id рецепта
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Флаг для отслеживания размонтирования компонента

    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/recipes/${id}/`);
        if (isMounted) {
          setRecipe(response.data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching recipe:', error);
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchRecipe();

    return () => {
      isMounted = false; // При размонтировании компонента меняем флаг
    };
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching recipe: {error.message}</div>;

  return (
    <div>
      {recipe && (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          {/* Ссылка на возврат в список рецептов категории */}
          <Link to={`/categories/${recipe.category}`}>Back to Recipe List</Link>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;