import React from 'react'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'
import BlogPosts from '../components/blogposts'

const BlogPage = () => {
    return (
        <Layout title={'Blog'}>
            <Container>
                <BlogPosts />
            </Container>
        </Layout>
    )
}

export default BlogPage