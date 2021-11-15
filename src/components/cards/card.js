import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function MainCard() {

return (
    <Card sx={{ maxWidth: 500, margin: 3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1559466273-d95e72debaf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          alt="suggested recipe"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Food Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Food Content
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}