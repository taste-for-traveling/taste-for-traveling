import React from 'react'

//Gatsby
import { Link } from 'gatsby'

//Hooks
import useSiteData from '../hooks/siteData'

//Bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//Static
import Logo from '../static/TasteforTraveling-v2-700px.png'

//Styles
import footerStyles from '../styles/footer.module.scss'

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
    const { title, author, social } = useSiteData()
    const socialLinks = [
        {
            key: 4,
            title: 'Facebook',
            url: social.facebook,
            type: 'external'
        },
        {
            key: 5,
            title: 'Instagram',
            url: social.instagram,
            type: 'external'
        },
        {
            key: 6,
            title: 'YouTube',
            url: social.youtube,
            type: 'external'
        }
    ]
    return (
        <footer>
            <Container className="my-5">
                <Row>
                    <Col md="5">
                        <img src={Logo} alt="Taste for Traveling" className="img-fluid" />
                        <p>A taste for travel, bit by the travel bug, wanderlust&mdash;whatever you want to call it, we&rsquo;ve got it. Plus we need food to live.</p>
                        <p>&copy;{new Date().getFullYear()} Created by { author }</p>
                    </Col>
                    <Col md={{ span: 3, offset: 1 }}>
                        <h3>On This Site</h3>
                        <ul className={footerStyles.list}>
                            {
                                siteLinks.map((siteLink, i) =>
                                    <li key={i}><Link to={siteLink.url}>{siteLink.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>
                    <Col md="3">
                        <h3>Social</h3>
                        <ul className={footerStyles.list}>
                            {
                                socialLinks.map((socialLink, i) =>
                                    <li key={i}><a href={socialLink.url} target="_blank" rel="noopener noreferrer">{socialLink.title}</a></li>
                                )
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer