// DEPENDENCIES
import React from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";

// STYLES
const CardContainer = styled.div`
	width: 90%;
	max-width: 350px;
	height: 400px;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	padding: 0.5em;
	margin: 2em;
	position: relative;
`

const Data = styled.div`
	width: 100%;
	height: 50px;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
`

const PostCard = ({ title, author, postDate, text, slug, imageUrl, imageAlt }) => {
    return (
    	<CardContainer className='shadow-4'>
	    	<img className='mb0' style={{ width: '100%' }} src={`https:${imageUrl}`} 
	    	alt={imageAlt} />
	    	<h1 className='tc mv2'>{title}</h1>
	    	<p className='tc'>{text}<span>
	    	<AniLink className='link dark-gray' fade to={`/${slug}`}> Read More...</AniLink>
	    	</span></p>
			<Data>
				<p className='ml2'>{author}</p>
				<p className='mr2'>{postDate.substring(0, 10)}</p>
			</Data>
	    </CardContainer>
    );
};

export default PostCard;
