import React from 'react'

//Gatsby
import { Link } from 'gatsby'

//Components
import Layout from '../components/layout'

const NotFound = () => {
    return(
        <Layout>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound