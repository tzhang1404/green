import React from 'react';
import {useStyles} from '../App';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxesGroup =() =>{
	 const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { Birthday, Halloween, Christmas } = state;
  const error = [Birthday, Halloween, Christmas].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Type of event</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={Birthday} onChange={handleChange('Birthday')} value="Birthday" />}
            label="Birthday"
          />
          <FormControlLabel
            control={<Checkbox checked={Halloween} onChange={handleChange('Halloween')} value="Halloween" />}
            label="Halloween"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Christmas} onChange={handleChange('Christmas')} value="Christmas" />
            }
            label="Christmas"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CheckboxesGroup;