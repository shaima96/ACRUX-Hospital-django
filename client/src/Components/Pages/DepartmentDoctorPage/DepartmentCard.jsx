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

export default function DepartmentCard({ department }) {
    const classes = useStyles();
    return (
        <Card id="card" className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={department.image}
                    id="photo"
                />
                <CardContent>
                    <Typography id="name" gutterBottom variant="h5" component="h2">
                        {department.name}
                    </Typography>
                    <Typography id="title" variant="body2" color="textSecondary" component="p">
                        Book an appoinment
                   </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}