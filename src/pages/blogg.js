import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../components/layout";

export default function Blogg({ data }) {
	return (
		<Layout>
			<h1>CHJ webblösningar blogg</h1>
			
			<ul>
				{data.allGhostPost.edges.map( document => (
					<li>
						<h2>
							<Link to={`/blogg/${document.node.slug}`}>{document.node.title}</Link>
						</h2>
						<p>{document.node.excerpt}</p>
					</li>
				))}
			</ul>
		</Layout>
	)
}

export const pageQuery = graphql`
query BloggQuery{
	allGhostPost {
		edges {
			node {
				id
				slug
				title
				html
				published_at
				excerpt
			}
		}
	}
}
`