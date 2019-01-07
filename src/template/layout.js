// DEPENDENCIES
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import AniLink from "gatsby-plugin-transition-link/AniLink";

// STYLES
import 'tachyons'
import './layout.css'

// STYLES
const Title = styled.h1`
	margin: 1em auto;
	font-size: 50px;
	text-align: center;
`

const LinksWrapper = styled.nav`
	width: 90%;
	max-width: 450px;
	hegiht: 50px;
	margin: 1em auto 2em auto;
`

// GLOBAL
const links = ['Home', 'About', 'Contact'].map((text, i) => 
	<AniLink key={shortid.generate()} 
	activeStyle={{ color: 'gray' }}
	className='f4 no-underline dark-gray' 
	fade to={i === 0 ? '/' : `/${text.toLowerCase()}`}
	>{text}</AniLink>
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
