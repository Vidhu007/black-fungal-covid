import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ImgMediaCard.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className="card">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/Upfront-4-5-Black-Fungus-Jun7-.jpg?otathK0wqAjV3_CBgwA2t81qmzqhN4Wr&size=770:433"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Explainer: What makes black fungus so deadly? 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Mucormycosis is one of the deadly fungi that affect humans. It is an invasive species that ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
  
        <Button size="small" color="primary" href="https://www.indiatoday.in/magazine/up-front/story/20210607-explainer-what-makes-black-fungus-so-deadly-1808121-2021-05-28" >
          Read More
        </Button>
      </CardActions>
      
    </Card>
    </div>
  );
}
