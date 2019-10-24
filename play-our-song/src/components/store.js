import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
	const [open, setOpen] = React.useState(true);
	const [playlistTitle, setPlaylistTitle] = React.useState('Untitled Playlist');

	const store = {
		open: [open, setOpen],
		playlistTitle:[playlistTitle, setPlaylistTitle],
	}

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}