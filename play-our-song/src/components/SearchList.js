import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const renderInput = (inputProps) => {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

renderInput.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
};

const renderSuggestion = (suggestionProps) => {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem ? selectedItem.label : '').indexOf(suggestion.label) > -1;
  return (
    <MenuItem
      {...itemProps}
      key={suggestion.id}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}

renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]).isRequired,
  index: PropTypes.number.isRequired,
  itemProps: PropTypes.object.isRequired,
  selectedItem: PropTypes.string.isRequired,
  suggestion: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 35,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  inputInput: {
    //width: 'auto',
    flexGrow: 1,
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: 800,
    },
  },
  divider: {
    height: theme.spacing(2),
  },
}));

const IntegrationDownshift = ({ queuedTracks, forceUpdate }) => {
  const classes = useStyles();
  const [suggestions, setSuggestions] = useState([]);
  const [allTracks, setAllTracks] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await fetch('./data/tracks.json');
      const json = await response.json();
      setAllTracks(Object.values(json));
      setSuggestions(Object.values(json).map(track => {return {
        id: track.id,
        label: track.title,
      }}));
    };
    fetchSuggestions();
  }, []);

  const getSuggestions = (value, { showEmpty = false } = {}) => {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0 && !showEmpty
      ? []
      : suggestions.filter(suggestion => {
          const keep = count < 5
            && suggestion.label.slice(0, inputLength)
                                .toLowerCase() === inputValue;
          if (keep) {
            count += 1;
          }
          return keep;
        });
  };

  const getTrack = (trackId) =>
    allTracks.find((track) => track.id === trackId);

  const addToQueue = (selectedItem) => {
    if (!selectedItem) {
      return;
    }
    queuedTracks.items.push(getTrack(selectedItem.id));
    queuedTracks.setItems(queuedTracks.items);
    forceUpdate();
  };

  return (
    <div className={classes.root}>
      <Downshift id="downshift-options" onChange={addToQueue} itemToString={item => item ? item.label : ''}>
        {({
          clearSelection,
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          openMenu,
          selectedItem,
        }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onChange: event => {
              if (event.target.value === '') {
                clearSelection();
              }
            },
            onFocus: openMenu,
            placeholder: 'Search...',
          });

          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,

                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onChange, onFocus },
                inputProps,
              })}

              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue, { showEmpty: true }).map((suggestion, index) => {
                      return renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion }),
                        highlightedIndex,
                        selectedItem,
                      })},
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
    </div>
  );
}
export default IntegrationDownshift;
