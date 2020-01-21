import React from 'react'

//Bootstrap
import { Container } from 'react-bootstrap'

//Components
import Layout from '../components/layout'
import Head from '../components/head'
import DisplayHeader from '../components/displayheader'
import BlogPosts from '../components/blogposts'

export const title = "Blog"

const BlogPage = (props) => {
    return (
        <Layout title={title}>
            <Head title={title} />
            <DisplayHeader title={title}/>
            <Container>
                <BlogPosts />
            </Container>
        </Layout>
    )
}

export default BlogPage