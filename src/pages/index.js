// DEPENDENCIES
import React from 'react'
import shortid from 'shortid'

// COMPONENTS
import Layout from '../template/layout'
import SEO from '../components/SEO'
import styled from 'styled-components'

// STYLES
const Title = styled.h1`
	margin: 1em auto;
	font-size: 50px;
	text-align: center;
`
const LinksWrapper = styled.div`
	width: 90%;
	max-width: 450px;
	hegiht: 50px;
	margin: 1em auto;
`

const LinkItem = styled.a`
	font-size: 22px;
	cursor: pointer;
`

// GLOBAL
const links = ['Home', 'About', 'Contact'].map(text => 
	<LinkItem key={shortid.generate()}>{text}</LinkItem>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title>Hi people</Title>
	<LinksWrapper className='flex justify-around items-center'>
		{links}
	</LinksWrapper>
  </Layout>
)

export default IndexPage
