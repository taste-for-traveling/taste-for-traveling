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

//Components
import Frame from '../components/frame'
import Head from '../components/head'

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
      <Frame title={props.data.contentfulBlogPost.title}>
          <Head title={props.data.contentfulBlogPost.title} />
          <Container className={blogBodyStyles.wrapper}>
              <h1 className="display-1">{props.data.contentfulBlogPost.title}</h1>
              <Badge variant="primary" className="mt-5 mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  {props.data.contentfulBlogPost.location.lat + ', ' + props.data.contentfulBlogPost.location.lon}
              </Badge>
              <p><date>{props.data.contentfulBlogPost.publishedDate}</date></p>
              <p><strong>{props.data.contentfulBlogPost.author}</strong></p>
              <div className={ blogBodyStyles.blogBody + ' my-5'}>
                { documentToReactComponents(props.data.contentfulBlogPost.body.json, options) }
              </div>
          </Container>
      </Frame>
  )
}

export default Blog