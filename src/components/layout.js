import React from 'react'

//Components
import SiteNavbar from '../components/sitenavbar'
import Footer from '../components/footer'

//Styles
import layoutStyles from '../styles/layout.module.scss'

const Layout = (props) => {
    return (
        <div>
            <SiteNavbar />
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout