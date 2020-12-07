import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
    root: {
        maxWidth: 300,

    }
});

export default function MediaCard({ doctor }) {
    const classes = useStyles();
    console.log(doctor.image)
    return (
        <Card id="card" className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={doctor.image}
                />
                <CardContent>
                    <Typography id="name" gutterBottom variant="h5" component="h2">
                        {doctor.name}
                    </Typography>
                    <Typography id="title" variant="body2" color="textSecondary" component="p">
                        Book an appoinment
                   </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}