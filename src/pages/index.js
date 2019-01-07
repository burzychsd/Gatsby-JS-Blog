// DEPENDENCIES
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// COMPONENTS
import Layout from '../template/layout'
import SEO from '../components/SEO'
import PostCard from '../components/PostCard'

const IndexPage = () => (
	<StaticQuery 
    	query={graphql`
				query pageQuery {
					allContentfulPost {
						edges {
							node {
								id
								title
						        date
						        slug
						        image {
						          id
						          file {
						            url
						            fileName
						            contentType
						          }
						        }
						        author {
						          authorName
						        }
						        shortText
							}
						}
					}
				}
			`}
    	render={data => (
	    		<Layout title='Simple.'>
					<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
					<main className='flex flex-wrap w-100 justify-around'>
					{data.allContentfulPost.edges.map(edge => 
						<PostCard key={edge.node.id} 
						title={edge.node.title}
						imageUrl={edge.node.image.file.url}
						imageAlt={edge.node.image.file.fileName}
						postDate={edge.node.date}
						author={edge.node.author.authorName}
						slug={edge.node.slug}
						text={edge.node.shortText} />
					)}
					</main>
				 </Layout>
	        )}
    	/>
)

export default IndexPage
