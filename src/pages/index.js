import React from 'react'

//Components
import Head from '../components/head'
import Frame from '../components/frame'

//Gatsby
import { graphql, useStaticQuery } from 'gatsby'

//Bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//Styles
import indexStyles from '../styles/index.module.scss'

//Static
import playIcon from '../static/icon-play.svg'

export const siteTitle = "Home"

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

    return(
        <Frame>
            <Head title={siteTitle} />
            <Container className="bg-secondary" fluid>
                <Container className={`${indexStyles.container} d-flex align-items-end`}>
                    <Row>
                        { data.allYoutubeVideo.edges.map((video, i) =>
                            <Col lg={{ span: 5, offset: 7}}>
                                <div className={`${indexStyles.latestVideo} mb-5`}>
                                    <h2>{ video.node.title }</h2>
                                    <p className="display-2"><a href={`https://youtu.be/${video.node.videoId}`} target="_blank" rel="noopener noreferrer" class={indexStyles.watchNow}>Watch Now <img src={ playIcon } width="100" height="100" alt="play"/></a></p>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </Container>
            <Container className="my-5">
                <Row>
                    <Col>
                        <h2 className="my-5">Places we got hungry . . .</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Japan
                    </Col>
                    <Col>
                        Portugal
                    </Col>
                    <Col>
                        America
                    </Col>
                </Row>
            </Container>
            <Container fluid className="bg-red my-5 py-5">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="mb-4">@tastefortraveling</h2>
                        </Col>
                    </Row>
                    { data.allInstaNode.edges.map((post, i) =>
                    <Row>
                        <Col md="4">
                            <img src={ post.node.preview } className="img-fluid" />
                        </Col>
                        <Col md="4">
                            <p><strong>tastefortraveling</strong> { post.node.caption }</p>
                        </Col>
                    </Row>
                    )}
                </Container>
            </Container>
        </Frame>
    )
}

export default IndexPage