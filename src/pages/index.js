import React from 'react'

//Components
import Head from '../components/head'
import Frame from '../components/frame'

//Bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//Styles
import '../styles/index.scss'
import homePageVideoStyles from '../styles/homepagevideo.module.scss'

export const title = "Home"

const IndexPage = () => {
    return(
        <Frame>
            <Head title={title} />
            <div className={homePageVideoStyles.container + ' bg-dark'}>
                Big Boi
            </div>
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
        </Frame>
    )
}

export default IndexPage