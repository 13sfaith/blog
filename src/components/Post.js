import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'


class Post extends React.Component {
	constructor(props)
	{
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		}
	}

	componentDidMount()
	{
		console.log(this.props.title);

		fetch("https://api.13sfaith.com/blog/load_article.php?title=" + this.props.title)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result
					})
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					})
				}
			)
	} 

	render()
	{
		var body = null
		var title = null
		var subtitle = null
		var views = null

		//let { title } = this.props.match.params
		console.log(title);
		if (this.state.items.length > 0)
		{
			body = this.state.items[0]['content']
			title = this.state.items[0]['title']
			subtitle = this.state.items[0]['subtitle']
			views = this.state.items[0]['views']
		}
		return (
			<div>
				<h1>{title}</h1>
				<h3>{subtitle}</h3>
				<p>Views: {views}</p>
				<ReactMarkdown children={body} />
			</div>
		)
	}
}

export default Post
