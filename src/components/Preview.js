import React from 'react'

import Card from 'react-bootstrap/Card'

import '../styles/Preview.css'

class Preview extends React.Component {

	render()
	{
		return(
			<div class="card">
			    <h2>{this.props.title}</h2>
			    <h6>{this.props.subtitle}</h6>
			    <p>{this.props.date}</p>
			    <img 
			 	  src="https://i.pinimg.com/originals/97/3a/46/973a463bf42acbd7b622d7fb7b611af9.jpg"
			    />
			</div>
		)
	}

	/*
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
	*/
}

export default Preview;
