import React from 'react'

//Components
import Head from '../components/head'
import Frame from '../components/frame'
import ScrollAnimation from 'react-animate-on-scroll';
import ProgressiveImage from 'react-progressive-image'

//Hooks
import useSiteData from '../hooks/siteData'
import SpriteSVG from '../hooks/spritesvg'

//Gatsby
import { Link, graphql, useStaticQuery } from 'gatsby'

//Bootstrap
import { Container, Row, Col, Image, Card, CardGroup, CardColumns, Button, ButtonGroup, CardDeck } from 'react-bootstrap'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

//Styles
import indexStyles from '../styles/index.module.scss'
import '../styles/animations.scss'

//Static
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
              mediaType
              preview
              original
              timestamp
              caption
              username
            }
          }
        },
        allContentfulPlace {
            edges {
              node {
                name,
                location {
                  lon,
                  lat
                }
                slug
                image {
                  file {
                    url
                  },
                  title,
                  description
                }
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
                <ProgressiveImage src={data.contentfulHero.image.file.url} placeholder="../static/hero-lowres.jpg" >
                    {src => <Image src={src} fluid className={`${indexStyles.heroImage} p-0 m-0 position-absolute`} alt={data.contentfulHero.title} />}
                </ProgressiveImage>
                {/* <Image src={data.contentfulHero.image.file.url} fluid className={`${indexStyles.heroImage} p-0 m-0 position-absolute`} alt={data.contentfulHero.title} /> */}
                <Container className="h-100">
                    <Row className="h-100">
                        {data.allYoutubeVideo.edges.map((video, i) =>
                            <Col key={i} lg={{ span: 5, offset: 7 }} className="d-flex h-100 align-items-end">
                                <div className={`${indexStyles.latestVideo} mb-5`}>
                                    <h2>{video.node.title}</h2>
                                    <div className="display-2">
                                        <ScrollAnimation animateIn="pulse">
                                        <a href={`https://youtu.be/${video.node.videoId}`} target="_blank" rel="noopener noreferrer" className={indexStyles.watchNow}>
                                            Watch Now
                                            <SpriteSVG variant="play" className={indexStyles.watchNow} />
                                        </a>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </Container>
            <Container as="section" fluid className="pb-2 position-relative">
                <div id="planeAnimation" className={indexStyles.planeAnimationWrapper}>
                    <ScrollAnimation animateIn="driftCloud1" animateOnce>
                        <SpriteSVG variant="cloud1" className={indexStyles.cloud1} />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="driftCloud2" animateOnce>
                        <SpriteSVG variant="cloud2" className={indexStyles.cloud2} />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flyPlane" animateOnce>
                        <SpriteSVG variant="airplane" className={indexStyles.airplane} />
                    </ScrollAnimation>
                </div>

                <Container>
                    <p class="display-3">We like to eat, travel, and make videos about it all.</p>
                    <ButtonGroup size="lg" className="mt-4" >
                        <Button className="mx-2" href={social.youtube} target="_blank" rel="noopener noreferrer">Subscribe on YouTube</Button>
                        <Button className="mx-2" href={social.instagram} rel="noopener noreferrer">Follow on Instagram</Button>
                        <Button className="mx-2" href={social.facebook} rel="noopener noreferrer">Like on Facebook</Button>
                    </ButtonGroup>
                </Container>

            </Container>
            <Container as="section">
                <Row>
                    <Col>
                        <h2 className="my-5">Places we got hungry . . .</h2>
                    </Col>
                </Row>
                <Row>
                    <CardColumns className={`${indexStyles.places} flex-wrap`}>
                        {data.allContentfulPlace.edges.map((place, i) =>
                            <ScrollAnimation animateIn="fadeIn" animateOnce>
                                <Card key={i} variant="flush" className={`${indexStyles.place} my-2`} >
                                    <Card.Img src={place.node.image.file.url} alt={place.node.image.title} />
                                    <Card.ImgOverlay className="p-0">
                                        <Card.Title className={indexStyles.placeTitle}><Link to={`places/${place.node.slug}`}>{place.node.name}</Link></Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </ScrollAnimation>
                        )}
                    </CardColumns>
                </Row>
            </Container>

            <Container fluid className="bg-red position-relative overflow-hidden" as="section">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="mb-4"><a href={social.instagram} target="_blank" rel="noopener noreferrer">@{social.instagramHandle}</a></h2>
                        </Col>
                    </Row>
                    {data.allInstaNode.edges.map((post, i) =>
                        <Row key={i}>
                            <Col md="4">
                                <a href={`https://www.instagram.com/p/${post.node.id}`} target="_blank" rel="noopener noreferrer">
                                    <Image src={post.node.preview} alt="Instagram Photo" className="img-fluid" />
                                </a>
                            </Col>
                            <Col md="4">
                                <p><strong><a href={`https://www.instagram.com/${post.node.username}`} target="_blank" rel="noopener noreferrer">{post.node.username}</a></strong> {post.node.caption}</p>
                                <h3><a href={`https://www.instagram.com/p/${post.node.id}`} target="_blank" rel="noopener noreferrer">See post on Instagram <FontAwesomeIcon icon={faCaretRight} /></a></h3>
                            </Col>
                        </Row>
                    )}
                </Container>
                <div className={`${indexStyles.globe} position-absolute`}>
                    <ScrollAnimation animateIn="rotateGlobe" animateOnce>
                        <SpriteSVG variant="globe" />
                    </ScrollAnimation>
                </div>
            </Container>
            <Container fluid className="bg-red position-relative" as="section">
                <Container>
                    <Row>
                        <Col>
                            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
                                <h2 className="mb-4 display-1">Flavor has<br />no borders.</h2>
                            </ScrollAnimation>
                        </Col>
                        <Col>
                            <ScrollAnimation animateIn="fadeIn" animateOnce delay="200">
                                <p>Four score and seven years ago, I started to make this design mockup in Adobe XD. It's going to be a long haul before I can get this working with NextJS and Contentful, but I'm going to try real hard.Four score and seven years ago, I started to make this design mockup in Adobe XD. It's going to be a long haul before I can get this working with NextJS and Contentful, but I'm going to try real hard.</p>
                                <p>Four score and seven years ago, I started to make this design mockup in Adobe XD. It's going to be a long haul before I can get this working with NextJS and Contentful, but I'm going to try real hard...</p>
                                <p>To make this design mockup in Adobe XD. It's going to be a long haul before I can get this working with NextJS and Contentful, but I'm going to try real hard.</p>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeIn" animateOnce delay="300">
                                <h3><Link to="/about">More about us <FontAwesomeIcon icon={faCaretRight} /></Link></h3>
                            </ScrollAnimation>
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