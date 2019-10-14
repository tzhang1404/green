import React from 'react';
import QueueItem from './QueueItem';
import {useStyles} from '../App';

import List from '@material-ui/core/List';

const Queue = ({ tracks }) => {
  const classes = useStyles();
    return(
    <List className={classes.queue}>
      { tracks.map(track => <QueueItem track={ track } key={ track.id } />) }
    </List>
  );
};




export default Queue;
