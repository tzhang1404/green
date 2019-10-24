import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
	const [playlistTitle, setPlaylistTitle] = React.useState('Untitled Playlist');
	const [open, setOpen] = React.useState(true);
	

	const store = {
		playlistTitle:[playlistTitle, setPlaylistTitle],
		open: [open, setOpen],
		
	}

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}