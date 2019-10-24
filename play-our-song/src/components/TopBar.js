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


const TopBar = ({ queuedTracks, forceUpdate }) => {
  const classes = useStyles();

  const {
    ["open"]: [open, setOpen],
  } = React.useContext(StoreContext)
    
    {/*}
    const handleClickOpen = () => {
        setOpen(true);
  };
    const handleClose = () => {
        setOpen(false);
  };
*/}

  return(
  <AppBar position="fixed">
      <Toolbar>
              <IconButton edge="start" color="inherit">
              <MusicNoteIcon fontSize="large" />
              </IconButton>
              <Typography className={classes.title} variant="h6">
                PlayOurSong
              </Typography>
              
              <Button variant="outlined" color="secondary" onClick={() => setOpen(true)}>
              Open form dialog
              </Button>

              {/*
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <IntegrationDownshift queuedTracks={ queuedTracks }  forceUpdate={ forceUpdate } />
              </div>
              */}

              <IconButton edge="end" aria-label="account of current user" color="inherit">
                <AccountCircle fontSize="small" />
              </IconButton>
      </Toolbar>
    </AppBar>
  )
};

export default TopBar;
