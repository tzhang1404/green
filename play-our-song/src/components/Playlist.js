import React from 'react';
import PlaylistItem from './PlaylistItem';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    marginTop:10,
    position:"relative"
  }
}));

const Playlist = ({ tracks }) => {
  const classes = useStyles();
    return(
    <Grid container spacing={3} className={classes.root} >
      { tracks.map(track => 
        <Grid item xs={3}>
        <PlaylistItem track={ track } key={ track.id } />
        </Grid>
      )}
    </Grid>
  );
};

export default Playlist;
