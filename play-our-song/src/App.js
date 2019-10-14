import React, { useEffect, useState } from 'react';
import Queue from './components/Queue';
import TopBar from './components/TopBar';
import { fade,makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



export const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '200',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: 800,
    },
  },
  queue: {
    margin: theme.spacing(5, 0, 0, 0),
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
  },
  inline: {
    display: 'inline',
  },
}));

const App = () =>  {
  const classes = useStyles();

  const [allTracks, setAllTracks] = useState({});
  const [queuedTracks, setQueuedTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const response = await fetch('./data/tracks.json');
      const json = await response.json();
      setAllTracks(json);
      setQueuedTracks(Object.values(json));
    };
    fetchTracks();
  }, []);


  return(
  <React.Fragment>
  <TopBar queuedTracks={ queuedTracks } className={classes.grow} />

  <Container maxWidth="md" >
    <Queue tracks={ queuedTracks } />
  </Container>
  </React.Fragment>

);}


export default App;
