module.exports = {
  siteMetadata: {
    title: `CHJ Webblösningar`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
	},
	/* {
		resolve: "gatsby-source-strapi",
		options: {
			apiURL: "http://localhost:1337",
			contentTypes: [
				"post",
				"user"
			],
			queryLimit: 1000
		}
	}, */
	{
		resolve: "gatsby-source-ghost",
		options: {
			apiUrl: "http://127.0.0.1:2368",
			contentApiKey: "d78fca0ff91b898bb6935a9496"
		}
	},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
