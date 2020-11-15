import React from 'react'

import '../styles/Header.css'

class Header extends React.Component {
	render()
	{
		return(
			<div className="head-contain">
			  <div className="head-obj">
				<a className="main-a" href="https://blog.13sfaith.com">
					<h2>13sfaith</h2>
				</a>
			  </div>
			  <div className="head-obj">
				<div className="social">
				<a className="social-a" href="https://github.com/13sfaith">
				  <svg width="50" height="50">
                                <image
                                    href="https://simpleicons.org/icons/github.svg"
                                    width="50"
                                    height="50"
                                />
				  </svg>
				</a>
				<a className="social-a" href="https://twitter.com/13sfaith">
				  <svg width="50" height="50">
                                <image
                                    href="https://simpleicons.org/icons/twitter.svg"
                                    width="50"
                                    height="50"
                                />
                  </svg>
				</a>
				</div>
			  </div>
			</div>
		)
	}
}

/*
class Header extends React.Component {
	render()
	{
		return(
			<div>
				<NavBar variant="dark" expand="lg">
					<NavBar.Brand href="https://13sfaith.com">13sfaith</NavBar.Brand>
					<NavBar.Collapse id="responsive-navbar-nav">
					<Nav class="pr-md-5"></Nav>
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
					</Nav>
					<Nav> 
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
					</NavBar.Collapse>	
				</NavBar>
			</div>
		)
	}
}
*/
export default Header;
