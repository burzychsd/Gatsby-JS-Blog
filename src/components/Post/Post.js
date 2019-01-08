// DEPENDENCIES
import React from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'

// COMPONENTS
import Layout from '../../template/layout'
import SEO from '../SEO'

// STYLES
const Article = styled.article`
	width: 100%;
	padding 0 1em;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`

const PicContainer = styled.div`
	width: 100%;
	height: 250px;
	background: url('https:${props => props.image}');
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: -2;

	&:after {
		content: '';
		width: 100%;
		height: 250px;
		background: rgba(255,255,255, 0.8);
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		z-index: -1;
	}
`

const Info = styled.div`
	width: 200px;
	height: 40px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 5em auto 2em auto;
`

const CommentsWrapper = styled.div`
	width: 100%;
	padding: 0 2em;
`

const Post = ({ data }) => {

	const createMarkup = (data) => ({ __html: data })

	const { id, title, date, author, content, image} = data.contentfulPost
	const shortName = 'gatsby-js-blog'
	const config = {
		identifier: id,
        title
	}

    return (
    	<Layout title={title}>
	    	<SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
	    	<PicContainer image={image.file.url} />
			<Info>
				<p className='ma0'>{date.substring(0, 10)}</p>
				<p className='ma0'>{author.authorName}</p>
			</Info>
			<Article dangerouslySetInnerHTML={createMarkup(content.childMarkdownRemark.html)} />
			<CommentsWrapper>
				<DiscussionEmbed className='ph2' shortname={shortName} config={config} />
			</CommentsWrapper>
	    </Layout>
    );
};

export default Post;

export const PageQuery = graphql`
	query PostQuery($slug: String!) {
		contentfulPost(slug: {eq: $slug}) {
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
	        content {
	          childMarkdownRemark {
	          	html
	          }
	        }
		}
	}
` 
