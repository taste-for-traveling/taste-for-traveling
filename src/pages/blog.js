import React from 'react'

//Bootstrap
import { Container } from 'react-bootstrap'

//Components
import Layout from '../components/layout'
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