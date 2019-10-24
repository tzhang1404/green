import React from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { StoreContext } from '../utils/store';
import PlaylistTitle from './PlaylistTitle';
import CheckboxesGroup from "./CheckboxesGroup";


const PartyDialog =() =>{

	const Object = React.useContext(StoreContext);
	
	return (
    <div>      
      <Dialog open={Object.open} onClose={() => Object["open"].setOpen(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Generate your playlist in one step</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To generate your playlist, please enter the title of your playlist and the type of your event.
          </DialogContentText>
          <PlaylistTitle/>
          <CheckboxesGroup/>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => Object["open"].setOpen(false)} color="primary">
            Generate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PartyDialog;