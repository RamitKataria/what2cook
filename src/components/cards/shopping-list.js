import React from "react";
// import  from '@mui/material/Card';
// import  from '@mui/material/CardContent';
// import  from '@mui/material/Typography';
import { Button, CardActionArea, Typography, CardContent, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox } from '@mui/material';



export default function ShoppingList() {

    const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


return (
    <Box sx={{maxWidth: 345, margin: 3}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Shopping List
          </Typography>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>


          <Button>Add</Button>
        </CardContent>
      </CardActionArea>
    </Box>
  );
}