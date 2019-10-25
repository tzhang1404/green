import React from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { StoreContext } from '../utils/store';
import CheckboxesGroup from "./CheckboxesGroup";


const PartyDialog = ({tracks, forceUpdate}) =>{

	const ctx = React.useContext(StoreContext);
	// console.log(ctx);

	const handleChange = () => event => {
    ctx.playlistTitle[1](event.target.value);
	};

	const handleGenerate = () => {
		console.log('handleGenerate clicked');
		ctx.open[1](false);
		// TODO: @Timo get form information
		const playlistName = '';
		const eventName = '';
		const genre = [];

		// TODO: @Kylie get spotify recommended tracks

		// TODO: @Timo render the recommended tracks
		// TODO: @Timo create a new playlist for a user with user_id
		// TODO: @Timo add tracks to the new playlist
	};

	return (
    <div>
      <Dialog open={ctx.open[0]} onClose={() => ctx.open[1](false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Generate your playlist in one step</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To generate your playlist, please enter the title of your playlist and the type of your event.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Playlist Title"
        	onChange={handleChange()}
            fullWidth
          />
          <CheckboxesGroup/>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary"  onClick={() => handleGenerate()} color="primary">
            Generate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PartyDialog;
