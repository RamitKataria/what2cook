import React, { Fragment } from "react";
import Box from '@mui/material/Box';

import MainCard from "./cards/card";
import ShoppingList from "./shopping-list";
import RecipeList from "./cards/recipeList";

export default function HomePage() {

return (
    <Fragment>
    <header>Hi there</header>

    <Box sx={{display: 'flex', justifyContent: 'center', alignItems:"flex-center"}}>
    <ShoppingList/>
    <MainCard/>
    <ShoppingList/>
    </Box>

    {/* <RecipeList/> */}
    </Fragment>

);
}