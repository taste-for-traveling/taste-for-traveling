import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import 'bootstrap';
import '../styles/index.scss'

const IndexPage = () => {
    return(
        <Layout>
            <Container className="my-5">
                <Row>
                    <Col lg="8">
                        <h2>Our Travels</h2>
                    </Col>
                    <Col lg="4">
                        <h3>@tastefortraveling</h3>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default IndexPage