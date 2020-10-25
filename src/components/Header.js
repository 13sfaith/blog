import React from 'react'
import NavBar from 'react-bootstrap/Navbar'

class Header extends React.Component {
	render()
	{
		return(
			<NavBar bg="dark" variant="dark" expand="lg">
				<NavBar.Brand href="https://13sfaith.com">13sfaith</NavBar.Brand>
			</NavBar>
		)
	}
}

export default Header;
