import React, {useState, useEffect} from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { reactContext } from '../utils/store';
import EventCheckboxesGroup from "./EventCheckboxesGroup";

// FIXME: These are meant to be removed.
var client_id = 'b1bcbd4ae171494db0dbd3a736535946'; // Your client id
var client_secret = '27127362e5174286a15516cc33a96998'; // Your secret
// var redirect_uri = 'http://www.google.com'; // Your redirect uri
var user_id = 'p7x48c95ztmvh1ry6umg0h82f'
var SpotifyWebApi = require('spotify-web-api-node');
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUri: 'http://www.example.com/callback'
});
spotifyApi.setAccessToken('BQCTikkYldKjxgJrScHBOH8kR6keRaeST3MwgupsU0Bb76mYOrycXyL19pF3W6e20rSCnq0rHu1xwYEENDfH6MOewhAAr2GwJ70XC17zd_7aEOPLPbDNOVFKcumCOrB6n_Ot2iBF6rSZ9bg9UoMSk16Xou0I31-bDg7aDbuNpkahO9q1P8fpSAleM2Xc8T2hXJFfZnXElxl7dAkaI2Y');


const EventPlaylistConfig = ({tracks, forceUpdate}) =>{
	const [eventToGenres, setEventToGenres] = useState({});

	useEffect(() => {
		const fetchEventToGenresMapping = async () => {
			const response = await fetch('./data/Event2Genre.json');
			const json = await response.json();
			console.log(json);
			setEventToGenres(json);
		};
		fetchEventToGenresMapping();
	}, []);

	const ctx = React.useContext(reactContext);
	// console.log(ctx);

	const handleChange = () => event => {
    ctx.playlistTitle[1](event.target.value);
	};

	const handleGenerate = () => {
		console.log('handleGenerate clicked');
		console.log(ctx);
		ctx.open[1](false);;
		// TODO: @Timo get form information
		const playlistTitle = ctx.playlistTitle[0];
		const playlistEvents = ctx.playlistEvents[0];
		const allGenresWithDuplications = playlistEvents.reduce(
			(acc, currEventName) => acc.concat(eventToGenres[currEventName]),
			[]);
		const genres = Array.from(new Set(allGenresWithDuplications));

		// TODO: @Kylie get spotify recommended tracks

		// TODO: @Timo render the recommended tracks
		// TODO: @Timo create a new playlist for a user with user_id
		createNewPlaylist(playlistTitle);
		// TODO: @Timo add tracks to the new playlist
	};

	const createNewPlaylist = (playlistTitle) => {
		spotifyApi.createPlaylist(user_id, playlistTitle);
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
          <EventCheckboxesGroup/>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary"  onClick={() => handleGenerate()}>
            Generate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventPlaylistConfig;
