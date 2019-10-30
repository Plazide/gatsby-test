import React from "react"
import ReactMarkdown from "react-markdown";
import ReactHtmlParser from "react-html-parser";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const PostTemplate = ({ data }) => {
	console.log(data);

	return(
		<Layout>
			<div className="post-header">
				<h1>{data.ghostPost.title}</h1>
				<span>by <span className="author">{data.ghostPost.primary_author.name}</span></span>
			</div>
			<div className="post-body">
				{ ReactHtmlParser(data.ghostPost.html) }
			</div>
		</Layout>
	)
}

export default PostTemplate;

export const query = graphql`
query PostTemplate($slug: String!){
	ghostPost(slug: {eq: $slug}){
		id
		title
		html
		primary_author {
			name
		}
	}
}
`