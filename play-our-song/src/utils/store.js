import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {


	const [open, setOpen] = React.useState(true);


	const store = {
		open: [open, setOpen],
	}

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}