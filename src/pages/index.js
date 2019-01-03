// DEPENDENCIES
import React from 'react'

// COMPONENTS
import Layout from '../template/layout'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
  </Layout>
)

export default IndexPage
