import { useStaticQuery, graphql } from 'gatsby'

const useSiteData = () => {
   const { site } = useStaticQuery(graphql`
        query SITE_DATA_QUERY {
            site {
                siteMetadata {
                    title
                    author
                    social {
                        youtube
                        facebook
                        instagram
                        instagramHandle
                    }
                }
            }
        }
    `)
    return site.siteMetadata
}
export default useSiteData