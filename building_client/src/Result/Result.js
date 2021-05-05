import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            Name :
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            location :
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            Email:
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            FrontEnd:
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            BackEnd:
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>

      </CardActions>
    </Card>
  );
}
