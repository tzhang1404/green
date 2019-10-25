import React from 'react'

export const reactContext = React.createContext(null)

export default ({ children }) => {
	const [playlistTitle, setPlaylistTitle] = React.useState('Untitled Playlist');
	const [open, setOpen] = React.useState(true);


	const store = {
		playlistTitle:[playlistTitle, setPlaylistTitle],
		open: [open, setOpen],

	}

	return <reactContext.Provider value={store}>{children}</reactContext.Provider>
}
