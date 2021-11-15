import React, { Fragment } from "react";
import Grid from '@mui/material/Grid';

import MainCard from "./cards/card";
import ShoppingList from "./cards/shopping-list";
import RecipeList from "./cards/recipeList";

export default function HomePage() {

return (
    <Fragment>
    <header>Hi there</header>

    <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems:"flex-center"}}>
    <ShoppingList/>
    <MainCard/>
    <ShoppingList/>
    </Grid>

    {/* <RecipeList/> */}
    </Fragment>

);
}