import { useState, useEffect } from "react";
import Recipe from "./components/Recipe";
import { RiEmotionHappyLine } from "react-icons/ri";
import "animate.css";
import config from "./config";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const requset = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getRecipes = async () => {
    const response = await fetch(requset);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="app">
      <form onSubmit={getSearch} className="search-form">
        <h1 className="discover">
          Discover new recipes
          <RiEmotionHappyLine className="ml-1" />
        </h1>
        <div className="searching">
          <input
            className="search-bar"
            type="text"
            placeholder="Search receipe"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </div>
      </form>
      <main>
        {recipes.map((r) => (
          <Recipe
            key={r.recipe.label}
            title={r.recipe.label}
            calories={r.recipe.calories}
            time={r.recipe.totalTime}
            type={r.recipe.mealType}
            img={r.recipe.image}
            ingred={r.recipe.ingredients}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
