import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFound = () => {
    return(
        <Layout>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound