import React, { useState, useEffect } from 'react';
import Recipe from './component/Recipe';

const App = () => {
  const APP_ID = "0b989c8b";
  const APP_KEY = "d3fcaca0c7b20a8668563e46cc1f2691";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const getRecipes = async () => {
    const response = await fetch(req);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" onChange={updateSearch} value={search} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
