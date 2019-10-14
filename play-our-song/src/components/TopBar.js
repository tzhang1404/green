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

const TopBar = () => {

const classes = useStyles();
return(
<AppBar position="fixed">
    <Toolbar>
            <IconButton edge="start" color="inherit">
            <MusicNoteIcon fontSize="large"/>
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              PlayOurSong
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <IntegrationDownshift />
            </div>

            <IconButton edge="end" aria-label="account of current user" color="inherit">
              <AccountCircle fontSize="medium"/>
            </IconButton>
    </Toolbar>
  </AppBar>
)
  };

export default TopBar;
