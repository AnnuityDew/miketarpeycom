/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import useSiteMetadata from "../hooks/use-site-metadata"
import Navigation from "../components/navigation"

type HeaderProps = { bgColor: string }

const Header = ({ bgColor }: HeaderProps) => {
  const { title } = useSiteMetadata()

  return (
    <header
      sx={{
        p: [3, 3, 4],
        width: (t: any): any => [`100%`, `100%`, `100%`, "250px", "250px"],
        backgroundColor: bgColor,
        position: [`relative`, `relative`, `relative`, `fixed`],
        height: `100%`,
        display: `flex`,
        padding: ["0px", "0px", "0px", "0px", "0px"],
        flexDirection: [`row`, `row`, `row`, `column`],
        alignItems: [`center`, `center`, `center`, `flex-start`],
        fontSize: ["1.2rem", "1.2rem", "1.5rem", "1.5rem", "1.5rem"],
        justifyContent: [
          `space-between`,
          `space-between`,
          `space-between`,
          `flex-start`,
        ],
        svg: {
          fill: "#FFFFFF",
        },
        a: {
          textDecoration: "none",
          color: "#FFFFFF",
          "&:hover,&:focus": {
            color: "#FFCCCC",
          },
        },
        variant: `sidebar`,
      }}
      data-testid="sidebar"
    >
      <Link
        to="/"
        aria-label={`${title}, Back to Home`}
        sx={{ width: ["150px", "150px", "150px", "100%", "100%"] }}
      >
        <StaticImage
          src="../images/mike-tarpey-headshot-20200427.jpg"
          alt=""
          loading="eager" />
      </Link>
      <Navigation bgColor={bgColor} />
    </header>
  );
}

export default Header
