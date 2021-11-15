import React, { Fragment } from "react";
import Grid from '@mui/material/Grid';

import MainCard from "./cards/card";
import ShoppingList from "./cards/shopping-list";
import RecipeList from "./cards/recipeList";
import RestrictionsPane from "./cards/RestrictionsPane";

export default function HomePage() {

    return (
        <Fragment>

            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: "flex-center" }}>
                <ShoppingList />
                <MainCard />
                <RestrictionsPane />
            </Grid>

            <RecipeList />
        </Fragment>

    );
}