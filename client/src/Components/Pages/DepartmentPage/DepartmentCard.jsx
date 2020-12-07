import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './depCard.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});


export default function DepCard(props) {
 //console.log(props)
  const classes = useStyles();
  return (
    
    <Card   >
      <CardActionArea>
        <CardMedia
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