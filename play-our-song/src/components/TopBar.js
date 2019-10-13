import React from 'react';
import {useStyles} from '../App';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

const TopBar = () => {
const classes = useStyles();
return(
<AppBar position="static">
    <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              PlayOurSong
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
  </AppBar>
)
	};




export default TopBar;