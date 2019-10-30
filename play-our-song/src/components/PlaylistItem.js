import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const PlaylistItem = ({ track }) => {

  return(
  <ListItem>
  <ListItemText
    primary={track.name}
    secondary={
    <React.Fragment>
      <Typography
        component="span"
        variant="body2"
        color="textPrimary"
      >
        {track.artists[0].name}   •
        </Typography>
          •   {track.album.name}
    </React.Fragment>
    }
  />
  </ListItem>)
};

export default PlaylistItem;
