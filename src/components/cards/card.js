import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function MainCard() {

return (
    <Card sx={{ maxWidth: 345, margin: 3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg" //image
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