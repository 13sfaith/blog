import React from 'react'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import '../styles/Header.css'

class Header extends React.Component {
	render()
	{
		return(
			<div>
				<NavBar variant="dark" expand="lg">
					<NavBar.Brand href="https://13sfaith.com">13sfaith</NavBar.Brand>
					<Nav class="nav-class"></Nav>
					<Nav>
						<Nav.Link href="https://github.com/13sfaith">
							<svg width="50" height="50">
								<image 
									href="https://simpleicons.org/icons/github.svg"
									width="50" 
									height="50"
								/>
							</svg>
						</Nav.Link>
						<Nav.Link href="https://twitter.com/13sfaith">
							<svg width="50" height="50">
								<image
									href="https://simpleicons.org/icons/twitter.svg"
									width="50"
									height="50"
								/>
							</svg>
						</Nav.Link>
					</Nav>	
				</NavBar>
				<br/>
			</div>
		)
	}
}

export default Header;
