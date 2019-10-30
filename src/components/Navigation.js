import React from 'react'
import { Link } from "gatsby"

export default function Navigation() {
	return (
		<nav>
			<Link to="/">Hem</Link>
			<Link to="/blogg">Blogg</Link>
			<Link to="/kontakt">Kontakt</Link>
		</nav>
	)
}
