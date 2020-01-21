import React from 'react'

//Bootstrap
import { Jumbotron, Container } from 'react-bootstrap'

//Styles
import displayHeaderStyles from '../styles/displayheader.module.scss'

const DisplayHeader = (props) => {
    return (
        <Jumbotron className={ displayHeaderStyles.pageHeader + ' mb-5' } style={{backgroundImage: 'url(' + props.image + ')'}}>
            <Container className="d-flex h-100">
                <h1 className={ displayHeaderStyles.h1 + ' align-self-end'} >{props.title}</h1>
            </Container>
        </Jumbotron>
    )
}

export default DisplayHeader



