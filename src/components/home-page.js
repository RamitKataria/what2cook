import React, { Fragment, useState } from "react";
import Grid from '@mui/material/Grid';

import MainCard from "./cards/card";
import ShoppingList from "./cards/shopping-list";
import RecipeList from "./cards/recipeList";
import RestrictionsCard from "./cards/RestrictionsCard";
import Header from "./header";

export default function HomePage() {
    let [userData, setUserData] = useState({
        group: "",
        user: "",
        intolerances: "",
        diet: "",
        excludedIngredients: ""
    })

    return (
        <Fragment>
            <Header />
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: "flex-center" }}>
                <ShoppingList />
                <MainCard />
                <RestrictionsCard userData={userData} setUserData={setUserData} />
            </Grid>

            <RecipeList />
        </Fragment>

    );
}