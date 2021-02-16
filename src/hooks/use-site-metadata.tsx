import { graphql, useStaticQuery } from "gatsby"

type Props = {
  site: {
    siteMetadata: {
      siteTitle: string
      siteTitleAlt: string
      siteUrl: string
      siteDescription: string
      siteLanguage: string
      siteImage: string
      author: string
      [key: string]: unknown
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteUrl
          siteDescription
          siteLanguage
          siteImage
          author
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
