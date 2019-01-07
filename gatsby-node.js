const path = require('path')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve('src/components/Post/Post.js')
	return graphql(`
	{
		allContentfulPost (limit: 100) {
			edges {
				node {
					id
					slug
				}
			}
		}
	}
	`).then(res => {
		if (res.errors) {
			reject(res.errors)
		}
		res.data.allContentfulPost.edges.forEach(edge => {
			createPage({
				path: edge.node.slug,
				component: blogPostTemplate,
				context: {
					slug: edge.node.slug
				}
			})
		})
	})
}
