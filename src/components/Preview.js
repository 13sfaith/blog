import React from 'react'

import Card from 'react-bootstrap/Card'

class Preview extends React.Component {

	render()
	{
		return(
			<Card style={{width: '18rem'}}>
				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Subtitle ClassName="mb-2">{this.props.subtitle}</Card.Subtitle>
				</Card.Body>
			</Card>
		)
	}
}

export default Preview;
