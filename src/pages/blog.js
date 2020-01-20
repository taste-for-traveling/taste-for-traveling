import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container } from 'react-bootstrap'

const BlogPage = () => {
    return(
        <div>
            <Header />
            <Container>
                <h1>Blog</h1>
                <p>Posts gon' go here.</p>
            </Container>

            <Footer />
        </div>
    )
}

export default BlogPage