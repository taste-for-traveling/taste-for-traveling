import React from 'react'

//Components
import SiteNavbar from '../components/sitenavbar'
import Footer from '../components/footer'

//Styles
import frameStyles from '../styles/frame.module.scss'

const frame = (props) => {
    return (
        <div>
            <SiteNavbar />
            <div className={frameStyles.container}>
                <div className={frameStyles.content}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default frame