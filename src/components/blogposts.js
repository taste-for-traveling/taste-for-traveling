import React from 'react'

//Gatsby
import { Link, useStaticQuery, graphql } from 'gatsby'

//Bootstrap
import { CardColumns, Card, Badge } from 'react-bootstrap'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

//Styles
import blogPostStyles from '../styles/blogposts.module.scss'

const BlogPosts = () => {
    const posts = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
            sort:{
                fields:publishedDate,
                order:DESC
            }
            ) {
            edges {
                node {
                title
                slug
                publishedDate(formatString: "MMMM YYYY")
                author
                location {
                    lon
                    lat
                  }
            }
            }
            }
        }`)
    return (
        <CardColumns className={`${blogPostStyles.cardcolumns} my-5`}>
            { posts.allContentfulBlogPost.edges.map((post, i) =>
                <Card key={i}>
                    <Card.Body>
                        <Card.Title as="div">
                            <h3><Link to={`/blog/${post.node.slug}`} className={ blogPostStyles.headerLink }>{post.node.title}</Link></h3>
                            <Badge variant="primary">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                {/* {post.node.location.lon + ', ' + post.node.location.lat} */}
                            </Badge>
                            <date className="d-block text-muted mt-1"><small>{post.node.date}</small></date>
                        </Card.Title>
                        <Card.Text>
                            {post.node.excerpt}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </CardColumns>
    )
}

export default BlogPosts