import { graphql, useStaticQuery } from "gatsby"

type Props = {
  site: {
    siteMetadata: {
      navMetadata: {
        name: string
        slug: string
      }[]
    }
  }
}

const useNavMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          navMetadata {
            name
            slug
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useNavMetadata
