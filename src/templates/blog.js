import React from 'react'

//Gatsby
import { graphql } from 'gatsby'

//Bootstrap
import { Container, Badge } from 'react-bootstrap'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

//Contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

//Styles
import blogBodyStyles from './blog.module.scss'

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
      publishedDate(formatString: "MMMM YYYY")
      author
      location {
        lat
        lon
      }
      body {
        json
      }
    }
  }`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} className="img-fluid" />
      }
    }
  }
  return (
      <Layout title={props.data.contentfulBlogPost.title}>
          <Container>
              <Badge variant="primary" className="mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  {props.data.contentfulBlogPost.location.lat + ', ' + props.data.contentfulBlogPost.location.lon}
              </Badge>
              <p><date>{props.data.contentfulBlogPost.publishedDate}</date></p>
              <p>{props.data.contentfulBlogPost.author}</p>
              <div className={ blogBodyStyles.blogBody + ' my-4'}>
                { documentToReactComponents(props.data.contentfulBlogPost.body.json, options) }
              </div>
          </Container>
      </Layout>
  )
}

export default Blog