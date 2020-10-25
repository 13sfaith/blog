import React from 'react'

import Preview from './Preview'

class BlogSea extends React.Component {
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
        fetch("https://api.13sfaith.com/blog/hello.php")
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

		const data = []
		for (let i = 0; i < this.state.items.length; i++)
		{
			data.push(<Preview title={this.state.items[i]["title"]} subtitle={this.state.items[i]["subtitle"]}/>)
		}

		return(
			<div>
				{data}
			</div>
		)
	}
}

export default BlogSea
