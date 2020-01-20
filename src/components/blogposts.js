import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { CardColumns, Card, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import blogPostStyles from './blogposts.module.scss'

const BlogPosts = () => {
    const posts = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title,
                        date,
                        location
                    }
                    html,
                    excerpt,
                    fields {
                        slug
                    }
                }
            }
            }
        }
        `)
    return (
        <CardColumns className={blogPostStyles.cardcolumns + ' my-5'}>
            {posts.allMarkdownRemark.edges.map((post, i) =>
                <Card key={i}>
                    <Card.Body>
                        <Card.Title as="div">
                            <h3><Link to={`/blog/${post.node.fields.slug}`} className={ blogPostStyles.headerLink }>{post.node.frontmatter.title}</Link></h3>
                            <Badge variant="primary">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                {post.node.frontmatter.location}
                            </Badge>
                            <date className="d-block text-muted mt-1"><small>{post.node.frontmatter.date}</small></date>
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