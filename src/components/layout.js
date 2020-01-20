import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import layoutStyles from './layout.module.scss'
import { Jumbotron, Container } from 'react-bootstrap'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className={layoutStyles.container}>
                <Jumbotron className={ layoutStyles.pageHeader }>
                    <Container className="d-flex h-100">
                        <h1 className={ layoutStyles.h1 + ' align-self-end'} >{props.title}</h1>
                    </Container>
                </Jumbotron>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout