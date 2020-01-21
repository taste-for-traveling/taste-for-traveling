import React from 'react'

//Gatsby
import { Link } from 'gatsby'

//Bootstrap
import { Container } from 'react-bootstrap'

//Components
import Layout from '../components/layout'
import Head from '../components/head'

//Styles
import notFoundStyles from '../styles/notfound.module.scss'

export const title = "Here be dragons"

const NotFound = () => {
    return(
        <Layout>
            <Head title={title} />
            <Container className={notFoundStyles.container}>
                <h1 className="display-1">Whoops...</h1>
                <h3>Nothing to see or eat here.</h3>
                <p><Link to="/">Back home</Link></p>
            </Container>
        </Layout>
    )
}

export default NotFound