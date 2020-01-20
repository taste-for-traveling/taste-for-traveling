import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'gatsby'
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
    return (
        <footer>
            <Container className="my-5">
                <Row>
                    <Col>
                        <h3>Taste for Traveling</h3>
                        <p>&copy;2020 Created by Douglas Odell</p>
                    </Col>
                    <Col>
                        <h3>On This Site</h3>
                        <ListGroup variant="flush">
                        {
                            siteLinks.map((siteLink, i) =>
                                <ListGroup.Item><Link to={siteLink.url}>{siteLink.title}</Link></ListGroup.Item>
                            )
                        }
                        </ListGroup>
                    </Col>
                    <Col>
                        <h3>Social</h3>
                        <ListGroup variant="flush">
                        {
                            socialLinks.map((socialLink, i) =>
                                <ListGroup.Item><a href={socialLink.url} target="_blank">{socialLink.title}</a></ListGroup.Item>
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