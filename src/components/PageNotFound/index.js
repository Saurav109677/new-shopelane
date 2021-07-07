import React from 'react'
import './pagenotFound.css'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
	return (
		<div>

			<div className="error">
				<p className="p">4</p>
				<p className="info_404">0</p>
				<p className="p">4</p>
				<div className="page-ms">
					<p className="page-msg"> Oops, the page you're looking for Disappeared </p>
					<Link to="/">
						<button className="go-back">Go Back</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default PageNotFound
