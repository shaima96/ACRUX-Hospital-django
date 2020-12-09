import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'





const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 250,
    }
});

export default function DoctorCard({ doctor }) {
    const classes = useStyles();
    return (
        <Card className={classes.root} style={{ margin: '20px', marginTop: '80px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={doctor.image}
                    className={classes.media}
                    id="photo"
                />
                <CardContent>
                    <Typography id="name" gutterBottom variant="h5" component="h2">
                        {doctor.name}
                    </Typography>
                    <Link to={`/appointment/${doctor.pk}`} style={{textDecoration:'none'}}>
                        <Typography id="title" variant="body2" color="textSecondary" component="p">
                            Book an appoinment
                   </Typography>
                    </Link>
                </CardContent>

            </CardActionArea>
        </Card>
    );
}