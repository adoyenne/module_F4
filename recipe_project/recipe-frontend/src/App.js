import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryList />} /> {/* Главная страница */}
        <Route path="/categories" element={<CategoryList />} /> {/* Страница категорий */}
        <Route path="/categories/:category_id" element={<RecipeList />} /> {/* Список рецептов для категории */}
        <Route path="/recipes/:id" element={<RecipeDetail />} /> {/* Детали рецепта */}
      </Routes>
    </Router>
  );
}


export default App;