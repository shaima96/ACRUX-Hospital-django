import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 380,
    },
    media: {
        height: 250,
    },
});



export default function DepCard({department}) {
 //console.log(props)
  const classes = useStyles();
  return (
    
    <Card   >
      <CardActionArea>
        <CardMedia id="photo"
          className={classes.media}
          image= {props.department.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.department.title}
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
  
      </CardActions>
    </Card>
    
  );
}
//export default MediaCard