import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/categories/');
        console.log('Fetched categories:', response.data);
        setCategories(response.data);
        setLoading(false);  // Снимаем флаг загрузки после получения данных
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError(error);
        setLoading(false);  // Снимаем флаг загрузки в случае ошибки
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching categories: {error.message}</div>;

  if (!Array.isArray(categories)) {
    return <div>No categories found.</div>;
  }

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;