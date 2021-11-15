import React, { Fragment } from "react";
import Grid from '@mui/material/Grid';

import MainCard from "./cards/card";
import ShoppingList from "./cards/shopping-list";
import RecipeList from "./cards/recipeList";
import Header from "./header";

export default function HomePage() {

return (
    <Fragment>
    <Header/>
    <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems:"flex-center"}}>
    <ShoppingList/>
    <MainCard/>
    <ShoppingList/>
    </Grid>

    <RecipeList/>
    </Fragment>

);
}