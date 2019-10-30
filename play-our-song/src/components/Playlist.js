import React from 'react';
import PlaylistItem from './PlaylistItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  playList: {
    margin: theme.spacing(0, 0, 0, 30),
    width: '100%',
    position: 'relative',
  },
}));

const Playlist = ({ tracks }) => {
  const classes = useStyles();
    return(
    <List className={classes.playList}>
      { tracks.map(track => <PlaylistItem track={ track } key={ track.id } />) }
    </List>
  );
};

export default Playlist;
