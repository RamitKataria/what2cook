import React, { useState } from 'react';
import { diets, intolerances } from '../../restrictionsList';
import {
    Select, MenuItem, ListItemIcon, ListItemText, InputLabel, Card, CardContent, Checkbox, Box,
    FormControl, FormLabel, TextField
} from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

export function Diets() {
    const [diet, setDiet] = React.useState('');

    const handleChange = (event) => {
        setDiet(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="diet-selection-label">Age</InputLabel>
                <Select
                    labelId="diet-selection-label"
                    id="diet-select"
                    value={diet}
                    label="Diet"
                    onChange={handleChange}
                >
                    {diets.map((name, index) => {
                        return (
                            <MenuItem key={name} value={name}>
                                {name}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
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
                <h3>Dietary Restrictions</h3>
                <Intolerances />
                <Diets />
                <ExcludeIngredients />
            </CardContent>
        </Card>
    )
}

function Intolerances() {
    const classes = useStyles();
    const [selected, setSelected] = useState([]);
    const isAllSelected =
        intolerances.length > 0 && selected.length === intolerances.length;

    const handleChange = (event) => {
        const value = event.target.value;
        if (value[value.length - 1] === "all") {
            setSelected(selected.length === intolerances.length ? [] : intolerances);
            return;
        }
        setSelected(value);
    };

    return (
        <FormControl className={classes.formControl}>
            <FormLabel id="mutiple-select-label">Intolerances</FormLabel>
            <Select
                labelId="mutiple-select-label"
                multiple
                value={selected}
                onChange={handleChange}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
            >
                <MenuItem
                    value="all"
                    classes={{
                        root: isAllSelected ? classes.selectedAll : ""
                    }}
                >
                    <ListItemIcon>
                        <Checkbox
                            classes={{ indeterminate: classes.indeterminateColor }}
                            checked={isAllSelected}
                            indeterminate={
                                selected.length > 0 && selected.length < intolerances.length
                            }
                        />
                    </ListItemIcon>
                    <ListItemText
                        classes={{ primary: classes.selectAllText }}
                        primary="Select All"
                    />
                </MenuItem>
                {intolerances.map((option) => (
                    <MenuItem key={option} value={option}>
                        <ListItemIcon>
                            <Checkbox checked={selected.indexOf(option) > -1} />
                        </ListItemIcon>
                        <ListItemText primary={option} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: 300
    },
    indeterminateColor: {
        color: "#f50057"
    },
    selectAllText: {
        fontWeight: 500
    },
    selectedAll: {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)"
        }
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    },
    getContentAnchorEl: null,
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "center"
    },
    variant: "menu"
};

// function Intolerances() {
//     const [checkedState, setCheckedState] = useState(
//         new Array(intolerances.length).fill(false)
//     );

//     const handleOnChange = (position) => {
//         const updatedCheckedState = checkedState.map((item, index) =>
//             index === position ? !item : item
//         );

//         setCheckedState(updatedCheckedState);
//     };

//     return (
//         <FormControl component="fieldset">
//             <FormLabel component="legend">Intolerances</FormLabel>
//             <FormGroup>
//                 {intolerances.map((name, index) => {
//                     return (
//                         <FormControlLabel key={name} control={<Checkbox
//                             checked={checkedState[index]}
//                             onChange={() => handleOnChange(index)} />}
//                             label={name}>
//                         </FormControlLabel>
//                     );
//                 })}
//             </FormGroup>
//         </FormControl>
//     );
// }

// function Diets() {
//     return (
//         <FormControl component="fieldset">
//             <FormLabel component="legend">Diet</FormLabel>
//             <RadioGroup aria-label="diet" defaultValue="" name="radio-buttons-group">
//                 {diets.map((name, index) => {
//                     return (
//                         <FormControlLabel key={name} value={name} control={<Radio />} label={name} />
//                     )
//                 })}
//             </RadioGroup>
//         </FormControl>
//     )
// }