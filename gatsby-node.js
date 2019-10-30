/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

async function makeRequest(graphql){
	const result = await graphql`
	allStrapiPost {
		edges {
			node {
				id
			}
		}
	}
	`

	return result;
}

async function createPages({ actions, graphql }){
	const {createPage} = actions;

	const result = await graphql(`
	{
		allGhostPost {
			edges {
				node {
					slug
					title
					html
					authors {
						name
					}
				}
			}
		}
	}`);
	const posts = result.data.allGhostPost.edges;

	posts.forEach( ({ node }) => {
		createPage({
			path: `/blogg/${node.slug}`,
			component: path.resolve("./src/templates/post.js"),
			context: {
				slug: node.slug
			}
		})
	});

	return posts;
}

exports.createPages = createPages