import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <Navbar collapseOnSelect bg="transparent" expand="lg" fixed="top">
                <Nav className="justify-content-end" activeKey="/">
                    <Nav.Item as="nav-link"><Link to="/" className="m-3">Home</Link></Nav.Item>
                    <Nav.Item as="nav-link"><Link to="/blog" className="m-3">Blog</Link></Nav.Item>
                    <Nav.Item as="nav-link"><Link to="/about" className="m-3">About</Link></Nav.Item>
                    <Nav.Item as="nav-link"><a href="https://www.facebook.com/TasteforTraveling/" target="_blank" className="m-3">Facebook <FontAwesomeIcon icon={ faChevronRight } /></a></Nav.Item>
                    <Nav.Item as="nav-link"><a href="https://www.instagram.com/tastefortraveling/" target="_blank" className="m-3">Instagram <FontAwesomeIcon icon={ faChevronRight } /></a></Nav.Item>
                    <Nav.Item as="nav-link"><a href="https://www.instagram.com/tastefortraveling/" target="_blank" className="m-3">YouTube <FontAwesomeIcon icon={ faChevronRight } /></a></Nav.Item>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header