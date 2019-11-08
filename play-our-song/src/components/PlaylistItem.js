import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    minHeight:420,
    maxHeight:450,
  },
});

const nameHandle = (name) => {
  if(name.length<35){
    return name
  }
  let subname = name.substring(0,35);
  subname = subname + '...'
  return subname
}

const PlaylistItem = ({ track }) => {

const classes = useStyles();

  return (
    <Card className={classes.card} >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={track.album.images[1].url}
          title="Contemplative Reptile"
        />
        {console.log("come")}
        {console.log(track)}
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {nameHandle(track.name)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {track.artists[0].name}
          </Typography>
        </CardContent>
    </Card>
  );
}
export default PlaylistItem;
