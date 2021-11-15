import React, { useState } from 'react';
import { diets, intolerances } from './restrictionsList';
import { Card, CardContent, Checkbox, Box, FormControlLabel, FormGroup, Radio, FormControl, RadioGroup, FormLabel, TextField } from '@mui/material';

function Intolerances() {
    const [checkedState, setCheckedState] = useState(
        new Array(intolerances.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Intetolerances</FormLabel>
            <FormGroup>
                {intolerances.map((name, index) => {
                    return (
                        <FormControlLabel key={name} control={<Checkbox
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)} />}
                            label={name}>
                        </FormControlLabel>
                    );
                })}
            </FormGroup>
        </FormControl>
    );
}

function Diets() {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Diet</FormLabel>
            <RadioGroup aria-label="diet" defaultValue="" name="radio-buttons-group">
                {diets.map((name, index) => {
                    return (
                        <FormControlLabel key={name} value={name} control={<Radio />} label={name} />
                    )
                })}
            </RadioGroup>
        </FormControl>
    )
}

function ExcludeIngredients() {
    return (
        <TextField
            id="excludedIngredients"
            label="Ingredients to Exclude"
        />
    )
}

export default function RestrictionsPane() {
    return (
        <Card>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "flex-center" }}>
                    <Intolerances />
                    <Diets />
                </Box>
                <ExcludeIngredients />
            </CardContent>
        </Card>
    )
}
