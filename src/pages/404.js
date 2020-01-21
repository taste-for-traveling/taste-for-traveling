import React from 'react'

//Gatsby
import { Link } from 'gatsby'

//Components
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return(
        <Layout>
            <Head title="Here be dragons" />
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound