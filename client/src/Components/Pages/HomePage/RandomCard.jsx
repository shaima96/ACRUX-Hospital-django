import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        maxWidth: 330,
        textAlign:"center",
    },
    media: {
        height: 250,
    },
});

const RandomCard = ({department}) => {
    const classes = useStyles()
    return (
        <Link to={`/department/${department.pk}`} style={{textDecoration:'none'}}>
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
                    <Typography id="about" variant="body2" color="textSecondary" component="p">
                        {department.about}
            </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>

    )
}

export default RandomCard