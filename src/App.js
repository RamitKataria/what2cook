import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import GetRecipes from './GetMeals';


function App() {
  const [recipeData, setRecipeData] = useState(null);
  const [diets, setDiets] = useState("Pescatarian");
  const [allergies, setAllergies] = useState("Cashews");
  const [restrictions, setRestrictions] = useState("Garlic");
  const [groupID, setGroupID] = useState(-1);

  const apiKey = "6ff12494e32744a387ea1ba1b2d44f9e"

  function getRecipeData() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=${diets}&intolerences=${allergies}&excludeIngredients=${restrictions}&number=3`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function addRecipeFilters() {
    let diets_tmp = diets;
    let allergies_tmp = allergies;
    let restrictions_tmp = restrictions;
    diets_tmp += document.getElementById("dietInput");
    allergies_tmp += document.getElementById("allergiesInput");
    restrictions_tmp += document.getElementById("restrictionsInput");

    setDiets(diets_tmp);
    setAllergies(allergies_tmp);
    setRestrictions(restrictions_tmp);

    document.getElementById("dietLabel").innerHTML = diets;
    document.getElementById("allergyLabel").innerHTML = allergies;
    document.getElementById("restrictionLabel").innerHTML = restrictions;

    document.getElementById("dietInput").placeholder = "";
    document.getElementById("allergyInput").placeholder = "";
    document.getElementById("restrictionInput").placeholder = "";
  }

  function clearPreferences() {
    setDiets("");
    setAllergies("");
    setRestrictions("");
    document.getElementById("dietLabel").innerText = "";
    document.getElementById("allergyLabel").innerText = "";
    document.getElementById("restrictionLabel").innerText = "";
  }

  function accessDatabase() {
    fetch (
      'https://obscure-journey-34975.herokuapp.com/'
    )
    .then(response => response.json())
    .then(data => {
      // setDiets(data.member)
      // setAllergies(data.)
      // setRestrictions(data.)
      document.getElementById("dietLabel").innerHTML = diets;
      document.getElementById("allergyLabel").innerHTML = allergies;
      document.getElementById("restrictionLabel").innerHTML = restrictions;
      getRecipeData();
    })
    .catch(() => {
      console.log("error");
    });;
  }

  function handleChangeDiets(e) {
    setDiets(e.target.value);
  }
  function handleChangeAllergies(e) {
    setAllergies(e.target.value);
  }
  function handleChangeRestrictions(e) {
    setRestrictions(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <div>
          <label>Diets: </label>
          <text id="dietLabel"></text>
        </div>
        <div>
          <label>Allergies: </label>
          <text id="allergyLabel"></text>
        </div>
        <div>
          <label>Restrictions: </label>
          <text id="restrictionLabel"></text>
        </div>
      </div>
      <section className="controls">
        <input
          id = "dietInput"
          type="text"
          placeholder="Diets: (e.g. Pescatarian)"
          onChange={handleChangeDiets}
        />
        <input
          id = "allergyInput"
          type="text"
          placeholder="Allergies (e.g. Cashews)"
          onChange={handleChangeAllergies}
        />
        <input
          id = "restrictionsInput"
          type="text"
          placeholder="Restrictions (e.g. Garlic)"
          onChange={handleChangeRestrictions}
        />
        {/* <button onClick={addRecipeFilters}>Add Preferences</button> */}
        <button onClick={getRecipeData}>Get Recipes</button>
        <button onClick={addRecipeFilters}>Add Preferences</button>
        <button onClick={clearPreferences}>Clear Preferences</button>
        <input
          type="text"
          placeholder="Group ID"
          onChange={handleChangeDiets}
        />
        <button onClick={accessDatabase}>Join Group</button>
      </section>
      {recipeData && <GetRecipes recipeData={recipeData} />}
    </div>
  );

}

export default App;
