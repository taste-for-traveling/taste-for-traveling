import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
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
        url: 'https://www.facebook.com/TasteforTraveling/',
        type: 'external'
    },
    {
        key: 5,
        title: 'Instagram',
        url: 'https://www.instagram.com/tastefortraveling/',
        type: 'external'
    },
    {
        key: 6,
        title: 'YouTube',
        url: 'https://www.youtube.com/channel/UC2cpbcMO2louHxVZob43iEw',
        type: 'external'
    }
]

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect bg="transparent" expand="lg" fixed="top">
                <Nav className="justify-content-end" activeKey="/">
                    {
                        navItems.map((navItem, i) => {
                            if (navItem.type === 'internal') {
                                return (
                                    <Nav.Item as="nav-link" key={i}><Link to={navItem.url} className={headerStyles.link}>{navItem.title}</Link></Nav.Item>
                                )
                            } else if (navItem.type === 'external') {
                                return(
                                    <Nav.Item as="nav-link"><a href={navItem.url} target="_blank" className={headerStyles.link}>{navItem.title} <FontAwesomeIcon icon={faChevronRight} className={headerStyles.icon} /></a></Nav.Item>
                                )
                            }
                        })
                    }
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header