import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
// import uuid from 'react-uuid'



const useStyles = makeStyles({

    root: {
        maxWidth: 250,
        height: 200,
    },
    media: {
        maxHeight: 300,
    },
    MuiCardActionArea: {
        width: 200,
        height: 200,
        display: 'flex',
        background: 'lightgrey'
    },
    MuiTypography: {
        display: 'flex',
        'justify-content': 'center'
    }
});



const MediaCard = ({ textBord, id }) => {
    
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link to={"/inBoard/" + `${id}`}>
                <CardActionArea className={classes.MuiCardActionArea} >

                    <CardContent>
                        < Typography className={classes.MuiTypography} gutterBottom variant="h5" component="h2">
                            {textBord}
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
            </Link>

            {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
        </Card >
    );
}
export default MediaCard;