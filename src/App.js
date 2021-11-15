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
    setDiets(diets + document.getElementById("dietInput").value);
    setAllergies(allergies + document.getElementById("allergiesInput").value);
    setRestrictions(restrictions + document.getElementById("restrictionsInput").value);

    document.getElementById("dietLabel").innerHTML = diets + document.getElementById("dietInput").value;
    document.getElementById("allergyLabel").innerHTML = allergies + document.getElementById("allergiesInput").value;
    document.getElementById("restrictionLabel").innerHTML = restrictions + document.getElementById("restrictionsInput").value;

    // document.getElementById("dietInput").placeholder = "";
    // document.getElementById("allergyInput").placeholder = "";
    // document.getElementById("restrictionInput").placeholder = "";

    setDatabase();
  }

  function clearPreferences() {
    setDiets("");
    setAllergies("");
    setRestrictions("");
    document.getElementById("dietLabel").innerHTML = "";
    document.getElementById("allergyLabel").innerHTML = "";
    document.getElementById("restrictionLabel").innerHTML = "";
  }

  function getID() {

  }

  function getDatabase() {
    fetch (
      'https://obscure-journey-34975.herokuapp.com/${groupID}',
      {method: 'GET'}
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
    });
  }

  function setDatabase() {
    fetch (
      'https://obscure-journey-34975.herokuapp.com/${groupID}',
      {method: 'PUT'}
    )
    .then(response => response.json())
    .then(data => {
      
    })
    .catch(() => {
      console.log("error");
    });
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
        <button onClick={getRecipeData}>Get Recipes</button>
        <button onClick={addRecipeFilters}>Add Preferences</button>
        <button onClick={clearPreferences}>Clear Preferences</button>
        <input
          type="text"
          placeholder="Group ID"
          onChange={handleChangeDiets}
        />
        <button onClick={getDatabase}>Join Group</button>
      </section>
      {recipeData && <GetRecipes recipeData={recipeData} />}
    </div>
  );

}

export default App;
