import React from 'react';
import {useStyles} from '../App';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IntegrationDownshift from './SearchList';
import Button from '@material-ui/core/Button';
import { StoreContext } from '../utils/store';


const TopBar = () => {
  const classes = useStyles();
  const ctx = React.useContext(StoreContext);

  return(
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
                <IconButton edge="start" color="inherit">
                <MusicNoteIcon fontSize="large" />
                </IconButton>
                <Typography className={classes.title} variant="h6">
                  PlayOurSong
                </Typography>
                <div className={classes.grow} />
                <Button variant="contained" color="primary" onClick={() => ctx.open[1](true)}>
                {ctx.playlistTitle[0]}
                </Button>
                <div className={classes.grow} />

                <IconButton edge="end" aria-label="account of current user" color="inherit">
                  <AccountCircle fontSize="large" />
                </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default TopBar;
