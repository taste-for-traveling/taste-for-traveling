import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'gatsby'

 const Footer = () => {
     return(
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
                            <ListGroup.Item><Link to="/">Home</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="/blog">Blog</Link></ListGroup.Item>
                            <ListGroup.Item><Link to="/about">About</Link></ListGroup.Item>
                        </ListGroup>  
                    </Col>
                    <Col>
                        <h3>Social</h3>
                        <ListGroup variant="flush">
                            <ListGroup.Item><a href="https://www.youtube.com/channel/UC2cpbcMO2louHxVZob43iEw" target="_blank">YouTube</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://www.instagram.com/tastefortraveling/" target="_blank">Instagram</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://www.facebook.com/TasteforTraveling/" target="_blank">Facebook</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
             </Container>
         </footer>
     )
 }

 export default Footer