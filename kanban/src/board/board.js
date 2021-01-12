import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

    root: {
        maxWidth: 250,
        height: 200,
    },
    media: {
        maxHeight: 300,
    },
    MuiCardActionArea: {
        height: 200,
        display: 'flex'
    },
    MuiTypography: {
        display: 'flex',
        'justify-content': 'center'
    }
});



const MediaCard = ({ textBord }) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.MuiCardActionArea} href="/inBoard">

                <CardContent>

                    {textBord.map((title, key) => 
                    < Typography className={classes.MuiTypography} gutterBottom variant="h5" component="h2">
                        {title.title}
                    </Typography>)}

                    {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
                </CardContent>
            </CardActionArea>
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