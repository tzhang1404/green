import React from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { StoreContext } from '../utils/store';

const PlaylistTitle =() =>{

	{/*
	const {
    	["playlistTile"]: [playlistTitle, setPlaylistTitle],
	} = React.useContext(StoreContext)*/}

	
	const handleChange = () => event => {
    //setPlaylistTitle(event.target.value);
	}

	
	return (
          <TextField
            autoFocus
            margin="dense"
            label="Playlist Title"
        	onChange={handleChange()}            
            fullWidth
          />
  );
}

export default PlaylistTitle;