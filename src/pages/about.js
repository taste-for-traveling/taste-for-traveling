import React from 'react'

//Bootstrap
import { Container, Badge } from 'react-bootstrap'

//Components
import Layout from '../components/layout'
import Head from '../components/head'
import DisplayHeader from '../components/displayheader'

export const title = "About"

const AboutPage = () => {
    return(
        <Layout>
            <Head title={title} />
            <DisplayHeader title={title}/>
            <Container>
                <p>We&rsquo;re a Northeastern U.S. couple, but it only took one trip to Iceland for us to realize traveling abroad together added a whole new dimension to both our lives and our relationship. And we always knew we liked food and drinks. One of us is an actress. The other is a nerd for videography. Mix it all together and you have the perfect recipe for a spastic travel vlog series. Us scavenging the world for the best local food we can find, and recording it all so we don&rsquo;t forget.  From our humble beginnings with an Instagram account and a dream, we managed to cobble together a couple videos from our first life-changing trip to Japan in 2017. Unfortunately, we filmed the whole thing on a GoPro which we only realized was oriented sideways after we got back and started editing.</p>

                <p>This bowl from Ichiran Ramen in our second video was delicious, but you can hardly tell because there are only 5 pixels in this screencap. A year and hundreds of dollars in camera equipment later, we took a trip to Portugal, a country we knew painfully little about except that they had good wine and spoke Portuguese. Lucky for us, it was an absolutely beautiful, photogenic country full of unforgettable meals (read: excellent video content). There was so much glorious 4K footage, it&rsquo;s taken almost 3 years to edit down into a vaguely presentable video.</p>

                <p>Wondering what our wine tour of the Douro Valley was like? Should only be a couple years before you find out! Our priorities when traveling are Food, Drink, Adventure, and Video Creating - in that order. And now that we know how much great food is out there, we have to keep exploring to discover more. We&rsquo;ll keep posting videos of what we find, partly to serve as highly overproduced home videos to look back on in the future, and partly to share with our family, friends, and all of you.</p>
                <h2>Gear</h2>
            </Container>
        </Layout>
    )
}

export default AboutPage