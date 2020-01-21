import React from 'react'

//Gatsby
import { Link } from 'gatsby'

//Bootstrap
import { Container, Navbar, Nav, NavbarBrand } from 'react-bootstrap'


//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

//Helpers
import { social } from '../helpers/social'

//Assets
import logo from '../assets/TasteforTraveling-v2-700px.png'

//Styles
import siteNavbarStyles from '../styles/sitenavbar.module.scss'

const navItems = [
    {
        key: 1,
        title: 'Home',
        url: '/',
        type: 'internal'
    },
    {
        key: 2,
        title: 'Blog',
        url: '/blog',
        type: 'internal'
    },
    {
        key: 3,
        title: 'About',
        url: '/about',
        type: 'internal'
    },
    {
        key: 4,
        title: 'Facebook',
        url: social('facebook'),
        type: 'external'
    },
    {
        key: 5,
        title: 'Instagram',
        url: social('instagram'),
        type: 'external'
    },
    {
        key: 6,
        title: 'YouTube',
        url: social('youtube'),
        type: 'external'
    }
]

const SiteNavbar = () => {
    return (
        <header>
                <Navbar collapseOnSelect bg="transparent" expand="lg" fixed="top">
                    <Container className="align-items-start">
                    <NavbarBrand>
                        <Link to="/">
                            <img src={logo} alt="Taste for Traveling home" width="300px" height="auto" />
                        </Link>
                    </NavbarBrand>
                    <Nav className="justify-content-end" activeKey="/">
                        {
                            navItems.map((navItem, i) => {
                                if (navItem.type === 'internal') {
                                    return (
                                        <Nav.Item key={i} as="nav-link" key={i}><Link to={navItem.url} className={siteNavbarStyles.link} activeClassName={siteNavbarStyles.activeLink}>{navItem.title}</Link></Nav.Item>
                                    )
                                } else if (navItem.type === 'external') {
                                    return(
                                        <Nav.Item key={i} as="nav-link"><a href={navItem.url} target="_blank" rel="noopener noreferrer" className={siteNavbarStyles.link}>{navItem.title} <FontAwesomeIcon icon={faChevronRight} className={siteNavbarStyles.icon} /></a></Nav.Item>
                                    )
                                }
                            })
                        }
                    </Nav>
                    </Container>
                </Navbar>

        </header>
    )
}

export default SiteNavbar