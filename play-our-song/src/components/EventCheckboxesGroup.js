import React, {useState, useEffect} from 'react';
import {useStyles} from '../App';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { reactContext } from '../utils/store';

const EventCheckboxesGroup =() =>{
	const [checkboxState, setCheckboxState] = useState({});
	const [eventToGenres, setEventToGenres] = useState({});
	const classes = useStyles();
	const ctx = React.useContext(reactContext);

	useEffect(() => {
		const fetchEventToGenresMapping = async () => {
			const response = await fetch('./data/Event2Genre.json');
			const json = await response.json();
			console.log(json);
			setEventToGenres(json);
			const allEvents = Object.keys(json);
			console.log(allEvents);
			allEvents.forEach((eventName) => {
				checkboxState[eventName] = false;
			});
			setCheckboxState(checkboxState);
		};
		fetchEventToGenresMapping();
	}, []);

	console.log(ctx);

	const handleChange = eventName => event => {
		let selectedPlaylistEvents = ctx.playlistEvents[0];
		if (selectedPlaylistEvents.indexOf(eventName) === -1) {
			selectedPlaylistEvents.push(eventName);
		}
		else {
			selectedPlaylistEvents
				= selectedPlaylistEvents.filter((x) => x !== eventName);
		}
		ctx.playlistEvents[1](selectedPlaylistEvents);

		console.log('handleChange - eventName', eventName);
		console.log('handleChange - selectedPlaylistEvents', selectedPlaylistEvents);
		console.log('handleChange - event.target.checked', event.target.checked);

		setCheckboxState({ ...checkboxState, [eventName]: event.target.checked });
	}

	return (
		<div className={ classes.root }>
			<FormControl component="fieldset" className={ classes.formControl }>
				<FormGroup>
					{
						Object.keys(eventToGenres).map(eventName => (
							<FormControlLabel
							 	control={
									<Checkbox checked={checkboxState[eventName]}
										onChange={handleChange(eventName)}
										value={eventName} />
								}
								label={eventName.toUpperCase()}/>
						))
					}
				</FormGroup>
			</FormControl>
		</div>
	);
}

export default EventCheckboxesGroup;
