import React from 'react'

//Bootstrap
import { Jumbotron, Container } from 'react-bootstrap'

//Components
import Header from '../components/header'
import Footer from '../components/footer'

//Styles
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className={layoutStyles.container}>
                <Jumbotron className={ layoutStyles.pageHeader + ' mb-5' } style={{backgroundImage: 'url(' + props.image + ')'}}>
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