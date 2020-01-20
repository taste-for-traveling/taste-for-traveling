import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return(
        <div>
            <Header />
            <div className={ layoutStyles.container }> 
                <div className={ layoutStyles.content }>
                    { props.children }
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout