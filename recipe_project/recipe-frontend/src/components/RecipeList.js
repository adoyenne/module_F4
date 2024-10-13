import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
  const { category_id } = useParams(); // Получаем id категории
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  let isMounted = true; // Флаг для отслеживания, размонтирован ли компонент

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/categories/${category_id}/recipes/`);
      if (isMounted) {
        setRecipes(response.data);
        setLoading(false);
      }
    } catch (error) {
      if (isMounted) {
        setError(error);
        setLoading(false);
      }
    }
  };

  fetchRecipes();

  return () => {
    isMounted = false; // Остановка выполнения эффекта при размонтировании компонента
  };
}, [category_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching recipes: {error.message}</div>;

  return (
    <div>
      <h2>Recipes in Category {category_id}</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link> {/* Ссылка на рецепт */}
          </li>
        ))}
      </ul>
      <Link to="/categories">Back to Categories</Link> {/* Ссылка назад на список категорий */}
    </div>
  );
};

export default RecipeList;