import React from 'react';
import {useStyles} from './Style';


import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const giveThumbUp = () =>{

}

const QueueItem = ({ track }) => (
  <ListItem>
  <ListItemText
          primary={track.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
              {track.artist}   •
              </Typography>
              •   {track.album}
            </React.Fragment>
          }
        />
  <ListItemSecondaryAction>
      <IconButton aria-label="Give a thumb up" onClick={() => giveThumbUp()}>
        <ThumbUpIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);


export default QueueItem;