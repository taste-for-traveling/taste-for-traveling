import React from 'react'
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'

const BlogPage = () => {
    return(
        <Layout title={'Blog'}>
            <Container>
                <h1>Blog</h1>
                <p>Posts gon' go here.</p>
            </Container>
        </Layout>
    )
}

export default BlogPage