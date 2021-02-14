/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"
import useNavMetadata from "../hooks/use-nav-metadata"

const ListLink = props => <Link to={props.to}>{props.children}</Link>

const Navigation = ({ bgColor }: { bgColor: string }) => {
  const { siteMetadata } = useSiteMetadata()
  const { navMetadata } = useNavMetadata()

  return (
    <nav
      aria-label="Primary Navigation"
      sx={{
        ul: {
          margin: 0,
          padding: 15,
          li: {
            listStyle: `none`,
            display: [`inline-block`, `inline-block`, `inline-block`, `block`],
          },
        },
        variant: `navigation`,
      }}
    >
      <ul>
        {navMetadata.map(navItem => (
          <li style={{ marginRight: `1rem` }} key={navItem.slug}>
            <ListLink to={navItem.slug}>{navItem.name}</ListLink>
          </li>
        ))}
        <li>
          <a href="https://miketarpey.medium.com">Blog</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
