import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const party = {
  title: "Becky's Party",
  "tracks": [
    {
    "platform":"deezer",
    "id":"110908332",
    "title":"Light It Up (feat. Nyla & Fuse ODG) (Remix)",
    "artist":"Major Lazer",
    "artistLink":"http:\/\/www.deezer.com\/artist\/282118?app_id=105611",
    "album":"Light It Up (feat. Nyla & Fuse ODG) (Remix)",
    "albumLink":"http:\/\/www.deezer.com\/album\/11533804?app_id=105611",
    "duration":"166",
    "trackLink":"http:\/\/www.deezer.com\/track\/110908332?app_id=105611",
    "picture":"http:\/\/e-cdn-images.deezer.com\/images\/cover\/c7b47243191ac8dcf8c461ca66f7fc1c\/250x250-000000-80-0-0.jpg",
    "addedDate":1470929629,
    "shareUrls":[

    ]
  },
  {
    "platform":"deezer",
    "id":"125513414",
    "title":"Work from Home",
    "artist":"Fifth Harmony",
    "artistLink":"http:\/\/www.deezer.com\/artist\/4974921?app_id=105611",
    "album":"7\/27 (Deluxe)",
    "albumLink":"http:\/\/www.deezer.com\/album\/13200738?app_id=105611",
    "duration":"214",
    "trackLink":"http:\/\/www.deezer.com\/track\/125513414?app_id=105611",
    "picture":"http:\/\/e-cdn-images.deezer.com\/images\/cover\/4529a3c8ec16c3e21de17a6294a6b3e1\/250x250-000000-80-0-0.jpg",
    "addedDate":1470929629,
    "shareUrls":[

    ]
  },
  {
    "platform":"deezer",
    "id":"124550860",
    "title":"I Took A Pill In Ibiza (Seeb Remix)",
    "artist":"Mike Posner",
    "artistLink":"http:\/\/www.deezer.com\/artist\/378294?app_id=105611",
    "album":"At Night, Alone.",
    "albumLink":"http:\/\/www.deezer.com\/album\/13076610?app_id=105611",
    "duration":"197",
    "trackLink":"http:\/\/www.deezer.com\/track\/124550860?app_id=105611",
    "picture":"http:\/\/e-cdn-images.deezer.com\/images\/cover\/502817de0506baab1c19a9eca29f9d80\/250x250-000000-80-0-0.jpg",
    "addedDate":1470929629,
    "shareUrls":[

    ]
  }
  ]
};

const Banner = ({ title }) => (
  <h1>{ title }</h1>
);

const Queue = ({ tracks }) => {
  const classes = useStyles();
  return(
  <List className={classes.root}>
    { tracks.map(track => <QueueItem track={ track } />) }
  </List>
  )
};

const giveThumbUp = () =>{

}

const QueueItem = ({ track }) => (
  <ListItem>
  <ListItemText
          primary={track.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
              {track.artist}   •
              </Typography>
              •   {track.album}
            </React.Fragment>
          }
        />
  <ListItemSecondaryAction>
      <IconButton aria-label="Give a thumb up" onClick={() => giveThumbUp()}>
        <ThumbUpIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);


const App = () =>  (
  <Container maxWidth="sm">
    <Banner title={ party.title } />
    <Queue tracks={ party.tracks } />
  </Container>
);


export default App;
