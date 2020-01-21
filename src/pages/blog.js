import React from 'react'

//Bootstrap
import { Container } from 'react-bootstrap'

//Components
import Frame from '../components/frame'
import Head from '../components/head'
import DisplayHeader from '../components/displayheader'
import BlogPosts from '../components/blogposts'

export const title = "Blog"

const BlogPage = (props) => {
    return (
        <Frame title={title}>
            <Head title={title} />
            <DisplayHeader title={title}/>
            <Container>
                <BlogPosts />
            </Container>
        </Frame>
    )
}

export default BlogPage