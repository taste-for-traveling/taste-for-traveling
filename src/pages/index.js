import React from 'react'
import { Link } from 'gatsby'
import { Nav } from 'react-bootstrap'

const IndexPage = () => {
    return(
        <div>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
                />
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>

            <h1>Taste for Traveling</h1>
            <h2>A taste for travel, bit by the travel bug, wanderlust&mdash;whatever you want to call it, we&rsquo;ve got it. Plus we need food to live.</h2>
            <p><Link to="/about">Learn more about us</Link></p>
        </div>
    )
}

export default IndexPage