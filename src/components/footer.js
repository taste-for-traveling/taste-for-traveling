import React from 'react'

//Gatsby
import { Link, graphql, useStaticQuery } from 'gatsby'

//Bootstrap
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

//Helpers
import { social } from '../helpers/social'

const socialLinks = [
    {
        key: 1,
        title: 'YouTube',
        url: social('youtube'),
    },
    {
        key: 1,
        title: 'Instagram',
        url: social('instagram'),
    },
    {
        key: 1,
        title: 'Facebook',
        url: social('facebook'),
    }
]

const siteLinks = [
    {
        key: 1,
        title: 'Home',
        url: '/'
    },
    {
        key: 2,
        title: 'Blog',
        url: '/blog'
    },
    {
        key: 3,
        title: 'About',
        url: '/about'
    }
]

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer>
            <Container className="my-5">
                <Row>
                    <Col>
                        <h3>Taste for Traveling</h3>
                        <p>A taste for travel, bit by the travel bug, wanderlust&mdash;whatever you want to call it, we&rsquo;ve got it. Plus we need food to live.</p>
    <p>&copy;{new Date().getFullYear()} Created by { data.site.siteMetadata.author }</p>
                    </Col>
                    <Col>
                        <h3>On This Site</h3>
                        <ListGroup variant="flush">
                            {
                                siteLinks.map((siteLink, i) =>
                                    <ListGroup.Item key={i}><Link to={siteLink.url}>{siteLink.title}</Link></ListGroup.Item>
                                )
                            }
                        </ListGroup>
                    </Col>
                    <Col>
                        <h3>Social</h3>
                        <ListGroup variant="flush">
                            {
                                socialLinks.map((socialLink, i) =>
                                    <ListGroup.Item key={i}><a href={socialLink.url} target="_blank" rel="noopener noreferrer">{socialLink.title}</a></ListGroup.Item>
                                )
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer