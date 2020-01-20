import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'
import Layout from '../components/Layout'
import 'bootstrap';
import '../styles/index.scss'

const IndexPage = () => {
    return(
        <Layout>
            <h1>Taste for Traveling</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
            <p>A taste for travel, bit by the travel bug, wanderlust&mdash;whatever you want to call it, we&rsquo;ve got it. Plus we need food to live. <Link to="/about">Learn more about us</Link></p>
        </Layout>
    )
}

export default IndexPage