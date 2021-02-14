import React from "react"
import { PageProps } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import locales from "../locales"
import GridItem from "../components/grid-item"
import modifyGrid from "../utils/modify-grid"
import { ChildImageSharp } from "../types/types"
import { visuallyHidden } from "../styles/utils"
import { itemListWrapperStyles, itemStyles } from "../styles/item-list"

/* haven't figured this out quite yet.
just going to manually work from here */

type DataProps = {
  projects: {
    nodes: {
      slug: string
      title: string
      cover: ChildImageSharp
      __typename: "MdxProject"
    }[]
  }
  pages: {
    nodes: {
      slug: string
      title: string
      cover: ChildImageSharp
      __typename: "MdxPage"
    }[]
  }
}

const Homepage: React.FC<PageProps<DataProps>> = ({
  data: { pages, projects },
}) => {
  const rawItems = [...pages.nodes, ...projects.nodes]
  const items = modifyGrid(rawItems)
  const itemsCount = items.length
  let divisor = 9

  for (let i = 0; i < itemsCount; i++) {
    const quotient = itemsCount % divisor
    const quotientAlt = (itemsCount - 1) % divisor

    if (quotient === 0 || quotientAlt === 0) {
      break
    }

    divisor -= 1
  }

  return (
    <Layout>
      <h1 sx={visuallyHidden} data-testid="page-title">
        {locales.home}
      </h1>
      <div className={`item-list-wrapper`} sx={itemListWrapperStyles}>
        <div className={`item-list div${divisor}`}>
          {items.length > 0 ? (
            items.map(item => (
              <GridItem
                to={item.slug}
                className="item"
                key={item.title}
                sx={itemStyles}
                data-testid={item.title}
              >
                <Img fluid={item.cover.childImageSharp.fluid} />
                <span>{item.title}</span>
              </GridItem>
            ))
          ) : (
            <div sx={{ padding: 3 }}>
              No projects and pages found at the locations defined for
              "projectsPath" and "pagesPath"
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Homepage
