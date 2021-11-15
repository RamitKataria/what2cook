import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const [recipeUrl, setRecipeUrl] = useState("");

  const apiKey = "6ff12494e32744a387ea1ba1b2d44f9e"; 

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${apiKey}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
        setRecipeUrl(data.sourceUrl);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <a href={recipeUrl}><img src={imageUrl} alt="recipe" /></a>
    </article>
  );
}

