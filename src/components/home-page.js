import React, { Fragment, useState } from "react";
import Grid from '@mui/material/Grid';

import MainCard from "./cards/card";
import ShoppingList from "./cards/shopping-list";
import RecipeList from "./cards/recipeList";
import RestrictionsCard from "./cards/RestrictionsCard";

export default function HomePage() {
    let [userData, setUserData] = useState({
        name: "",
        intolerances: "",
        diet: "Omnivore",
        excludedIngredients: ""
    })

    return (
        <Fragment>

            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: "flex-center" }}>
                <ShoppingList />
                <MainCard />
                <RestrictionsCard userData={userData} setUserData={setUserData} />
            </Grid>

            <RecipeList />
        </Fragment>

    );
}