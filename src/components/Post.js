import React from 'react'
import ReactMarkdown from 'react-markdown'


import '../styles/Post.css'


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
				<h1 class="title">{title}</h1>
				<hr/>
				<p class="subtitle">{subtitle}</p>
				<p>Views: {views}</p>
				<hr/>
				<div class="body-md"> 
					<ReactMarkdown children={body} />
				</div>
			</div>
		)
	}
}

export default Post
