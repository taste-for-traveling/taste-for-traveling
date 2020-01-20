import React from 'react'
import { graphql } from 'gatsby'
import { Container, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'

export const query = graphql`
query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date
        location
      }
      html
    }
  }`

const Blog = (props) => {
    return (
        <Layout title={props.data.markdownRemark.frontmatter.title}>
            <Container>
                <Badge variant="primary" className="mb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    {props.data.markdownRemark.frontmatter.location}
                </Badge>
                <p><date>{props.data.markdownRemark.frontmatter.date}</date></p>
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html  }} className="my-4"></div>
            </Container>
        </Layout>
    )
}

export default Blog