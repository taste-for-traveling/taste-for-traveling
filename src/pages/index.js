import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'
import Layout from '../components/Layout'
import '../styles/index.scss'

const IndexPage = () => {
    return(
        <Layout>
            <h1>Taste for Traveling</h1>
            <h2>A taste for travel, bit by the travel bug, wanderlust&mdash;whatever you want to call it, we&rsquo;ve got it. Plus we need food to live.</h2>
            <p><Link to="/about">Learn more about us</Link></p>
        </Layout>
    )
}

export default IndexPage