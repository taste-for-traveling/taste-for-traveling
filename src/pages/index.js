import React from 'react'

//Components
import Head from '../components/head'
import Frame from '../components/frame'
import ScrollAnimation from 'react-animate-on-scroll';

//Gatsby
import { graphql, useStaticQuery } from 'gatsby'

//Bootstrap
import { Container, Row, Col, Image } from 'react-bootstrap'

//Styles
import indexStyles from '../styles/index.module.scss'

//Static
import playIcon from '../static/icon-play.svg'
import hero from '../static/hero.jpg'

export const siteTitle = "Home"

export const sectionIn = "slideInRight"
export const elementIn = "fadeInUp"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allYoutubeVideo(limit: 1) {
          edges {
            node {
              title
              description
              videoId
              publishedAt
              privacyStatus
            }
          }
        },
        allInstaNode(limit: 1) {
          edges {
            node {
              id
              likes
              comments
              mediaType
              preview
              original
              timestamp
              caption
            }
          }
        }
      }`
    )

    return (
        <Frame>
            <Head title={siteTitle} />
            <Container className={`${indexStyles.heroContainer} bg-secondary p-0 overflow-hidden position-relative`} fluid>
                <Image src={hero} fluid className={`${indexStyles.heroImage} p-0 m-0 position-absolute`} />
                <Container className="h-100">
                    <Row className="h-100">
                        {data.allYoutubeVideo.edges.map((video, i) =>
                            <Col lg={{ span: 5, offset: 7 }} className="d-flex h-100 align-items-end">
                                <div className={`${indexStyles.latestVideo} mb-5`}>
                                    <h2>{video.node.title}</h2>
                                    <p className="display-2"><a href={`https://youtu.be/${video.node.videoId}`} target="_blank" rel="noopener noreferrer" class={indexStyles.watchNow}>Watch Now <Image src={playIcon} width="100" height="100" alt="play" /></a></p>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </Container>
            <Container as="section">
                <Row>
                    <Col>
                        <h2 className="my-5">Places we got hungry . . .</h2>
                    </Col>
                </Row>
                <ScrollAnimation animateIn={elementIn}>
                    <Row>
                        <Col>
                            <img src="" />
                            Japan
                        </Col>
                        <Col>
                            Portugal
                    </Col>
                        <Col>
                            America
                    </Col>
                    </Row>
                </ScrollAnimation>
            </Container>

            <Container fluid className="bg-red" as="section">
                <ScrollAnimation animateIn={sectionIn}>
                    <Container>
                        <Row>
                            <Col>
                                <h2 className="mb-4">@tastefortraveling</h2>
                            </Col>
                        </Row>
                        {data.allInstaNode.edges.map((post, i) =>
                            <Row>
                                <Col md="4">
                                    <img src={post.node.preview} alt="Instagram Photo" className="img-fluid" />
                                </Col>
                                <Col md="4">
                                    <p><strong>tastefortraveling</strong> {post.node.caption}</p>
                                </Col>
                            </Row>
                        )}
                    </Container>
                </ScrollAnimation>
            </Container>
        </Frame>
    )
}

export default IndexPage