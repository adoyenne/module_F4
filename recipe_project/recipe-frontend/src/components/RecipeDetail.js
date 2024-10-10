import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`/api/recipes/${id}/`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => console.error('Error fetching recipe:', error));
  }, [id]);

  return (
    <div>
      {recipe && (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </>
      )}
    </div>
  );
}

export default RecipeDetail;