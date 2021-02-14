/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

const Footer = ({ bgColor }: { bgColor: string }) => {
  const siteTitle = "mike tarpey"

  const text = "#FFFFFF"

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t: any): any => [`100%`, `100%`, `100%`, `250px`, `250px`],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: ["#000000", "#000000", "#000000", bgColor, bgColor],
        a: {
          color: "#CCCCCC",
          "&:hover,&:focus": {
            color: "#FFCCCC",
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        Made at various points in time from 2006-{new Date().getFullYear()} by{" "}
        {siteTitle}.
      </div>
      <div>
        <a href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-jodie">
          Theme
        </a>
        {` `}
        by
        {` `}
        <a href="https://www.lekoarts.de/en">LekoArts</a>
      </div>
    </footer>
  )
}

export default Footer
