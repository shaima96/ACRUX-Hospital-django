import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 415,
    },
    media: {
        height: 250,
    },
});

const RandomCard = ({department}) => {
    const classes = useStyles()
    return (
        <Card className={classes.root} style={{margin:'30px'}}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={department.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {department.title}
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {department.about}
            </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default RandomCard