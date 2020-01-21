import React from 'react'
import { Helmet } from 'react-helmet'

//Gatsby
import { useStaticQuery, graphql } from 'gatsby'

require('jquery')
require('bootstrap')

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return(
        <Helmet title={`${title} - ${data.site.siteMetadata.title}`} />
    )
}

export default Head