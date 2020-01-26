import React from 'react'

//Components
import Head from '../components/head'
import Frame from '../components/frame'
import ScrollAnimation from 'react-animate-on-scroll';
import { ReactSVG } from 'react-svg'
import PlayIcon from '../components/svg/playicon'

//Hooks
import useSiteData from '../hooks/siteData'

//Gatsby
import { Link, graphql, useStaticQuery } from 'gatsby'

//Bootstrap
import { Container, Row, Col, Image } from 'react-bootstrap'

//Styles
import indexStyles from '../styles/index.module.scss'

//Static
// import playIcon from '../static/icon-play.svg'
import globe from '../static/t4t-globe-only.svg'
import fork from '../static/t4t-fork-hashi.svg'

export const siteTitle = "Home"

export const sectionIn = "slideInRight"
export const elementIn = "fadeInUp"

const IndexPage = () => {
    const { social } = useSiteData()
    const data = useStaticQuery(graphql`
    query {
        contentfulHero {
            title
            image {
              file {
                url
              }
            }
          },
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
      }
      `
    )

    return (
        <Frame>
            <Head title={siteTitle} />
            <Container className={`${indexStyles.heroContainer} bg-secondary p-0 overflow-hidden position-relative`} fluid>
                <Image src={data.contentfulHero.image.file.url} fluid className={`${indexStyles.heroImage} p-0 m-0 position-absolute`} alt={data.contentfulHero.title} />
                <Container className="h-100">
                    <Row className="h-100">
                        {data.allYoutubeVideo.edges.map((video, i) =>
                            <Col key={i} lg={{ span: 5, offset: 7 }} className="d-flex h-100 align-items-end">
                                <div className={`${indexStyles.latestVideo} mb-5`}>
                                    <h2>{video.node.title}</h2>
                                    <div className="display-2">
                                        <a href={`https://youtu.be/${video.node.videoId}`} target="_blank" rel="noopener noreferrer" className={indexStyles.watchNow}>
                                            Watch Now 
                                            <PlayIcon className={indexStyles.watchNow} />
                                        </a>
                                    </div>
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
                <ScrollAnimation animateIn={elementIn} animateOnce>
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

            <Container fluid className="bg-red position-relative overflow-hidden" as="section">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="mb-4">@{social.instagramHandle}</h2>
                        </Col>
                    </Row>
                    {data.allInstaNode.edges.map((post, i) =>
                        <Row key={i}>
                            <Col md="4">
                                <img src={post.node.preview} alt="Instagram Photo" className="img-fluid" />
                            </Col>
                            <Col md="4">
                                <p><strong>tastefortraveling</strong> {post.node.caption}</p>
                            </Col>
                        </Row>
                    )}
                </Container>
                <div className={`${indexStyles.globe} position-absolute`}>
                    <ScrollAnimation animateIn="fadeInRight" animateOnce>
                        <Image src={globe} />
                    </ScrollAnimation>
                </div>
            </Container>
            <Container fluid className="bg-red position-relative" as="section">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="mb-4 display-1">Flavor has<br/>no borders.</h2>
                        </Col>
                        <Col>
                            <p>Four score and seven years ago, I started to make this design mockup in Adobe XD. It's going to be a long haul before I can get this working with NextJS and Contentful, but I'm going to try real hard.Four score and seven years ago, I started to make this design mockup in Adobe XD. It's going to be a long haul before I can get this working with NextJS and Contentful, but I'm going to try real hard.</p>
                            <p>Four score and seven years ago, I started to make this design mockup in Adobe XD. It's going to be a long haul before I can get this working with NextJS and Contentful, but I'm going to try real hard...</p>
                            <p>To make this design mockup in Adobe XD. It's going to be a long haul before I can get this working with NextJS and Contentful, but I'm going to try real hard.</p>
                            <h3><Link to="/about">More about us</Link></h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
                <div className={`${indexStyles.fork} position-absolute`}>
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce>
                        <Image src={fork} />
                    </ScrollAnimation>
                </div>
            </Container>
        </Frame>
    )
}

export default IndexPage