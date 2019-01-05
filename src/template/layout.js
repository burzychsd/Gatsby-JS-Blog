// DEPENDENCIES
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import { Link } from 'gatsby'

// STYLES
import 'tachyons'
import './layout.css'

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
const links = ['Home', 'About', 'Contact'].map((text, i) => 
	<Link className='link dark-gray' to={i === 0 ? '/' : `/${text.toLowerCase()}`}>
		<LinkItem key={shortid.generate()}>{text}</LinkItem>
	</Link>
)

const Layout = ({ children, title }) => (
  <Fragment>
  	<Title>{title}</Title>
  	<LinksWrapper className='flex justify-around items-center'>
		{links}
	</LinksWrapper>
    {children}
  </Fragment>        
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
