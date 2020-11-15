import React from 'react'
import { BrowserRouter, Route, useParams} from 'react-router-dom'

import '../styles/main.css'

import Header from './Header'
import BlogSea from './BlogSea'
import Post from './Post'

function HandlePost() {
	let { title } = useParams();
	return <Post title={title} />
}



class Main extends React.Component {

	render()
	{
		return (
			<div className="bg-main">
				<Header />
				<div className="container bg-main">
					<BrowserRouter>
						<Route exact path="/">
							<BlogSea />
						</Route>
						<Route path="/post/:title">
							<HandlePost />
						</Route>
					</BrowserRouter>
				</div>
			</div>
		)
	}
}

export default Main;
