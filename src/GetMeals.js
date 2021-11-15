import React from 'react';
import Meal from './Meal';

export default function GetRecipes({ recipeData }) {
  return (
    <main>
      <section className="meals">
        {recipeData.results.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}

