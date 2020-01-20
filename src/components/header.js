import React from 'react'
import { Container, Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { social } from '../helpers/social'
import logo from '../assets/TasteforTraveling-v2-700px.png'
import headerStyles from './header.module.scss'

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

const Header = () => {
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
                                        <Nav.Item as="nav-link" key={i}><Link to={navItem.url} className={headerStyles.link} activeClassName={headerStyles.activeLink}>{navItem.title}</Link></Nav.Item>
                                    )
                                } else if (navItem.type === 'external') {
                                    return(
                                        <Nav.Item as="nav-link"><a href={navItem.url} target="_blank" className={headerStyles.link}>{navItem.title} <FontAwesomeIcon icon={faChevronRight} className={headerStyles.icon} /></a></Nav.Item>
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

export default Header