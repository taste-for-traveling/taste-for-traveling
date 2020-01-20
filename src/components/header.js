import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect bg="transparent" expand="lg" fixed="top">
                <Nav className="justify-content-end" activeKey="/">
                    <Nav.Item as="nav-link"><Link to="/" className={ headerStyles.link }>Home</Link></Nav.Item>
                    <Nav.Item as="nav-link"><Link to="/blog" className={ headerStyles.link }>Blog</Link></Nav.Item>
                    <Nav.Item as="nav-link"><Link to="/about" className={ headerStyles.link }>About</Link></Nav.Item>
                    <Nav.Item as="nav-link"><a href="https://www.facebook.com/TasteforTraveling/" target="_blank" className={ headerStyles.link }>Facebook <FontAwesomeIcon icon={ faChevronRight } className={ headerStyles.icon } /></a></Nav.Item>
                    <Nav.Item as="nav-link"><a href="https://www.instagram.com/tastefortraveling/" target="_blank" className={ headerStyles.link }>Instagram <FontAwesomeIcon icon={ faChevronRight } className={ headerStyles.icon } /></a></Nav.Item>
                    <Nav.Item as="nav-link"><a href="https://www.instagram.com/tastefortraveling/" target="_blank" className={ headerStyles.link }>YouTube <FontAwesomeIcon icon={ faChevronRight } className={ headerStyles.icon } /></a></Nav.Item>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header