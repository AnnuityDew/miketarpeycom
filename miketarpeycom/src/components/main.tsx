/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import useSiteMetadata from "../hooks/use-site-metadata"
import Navigation from "../components/navigation"

type MainProps = { children: React.ReactNode; bgColor?: string }

const Main = ({ children, bgColor }: MainProps) => {
  const { title } = useSiteMetadata()

  return (
    <main
      sx={{
        p: [3, 3, 4],
        // width: (t: any): any => [`100%`, `100%`, `100%`, `20%`, `30%`],
        gridColumnStart: [1, 1, 1, 2],
        backgroundColor: bgColor,
        height: `100%`,
        display: `flex`,
        padding: ["0", "0", "0", "0", "0"],
        // flexDirection: [`row`, `row`, `row`, `column`],
        // alignItems: [`center`, `center`, `center`, `flex-start`],
        // justifyContent: [`space-between`, `space-between`, `space-between`, `flex-start`],
        svg: {
          fill: "#FFFFFF",
        },
        //variant: `sidebar`,
      }}
      // data-testid="sidebar"
    >
      {children}
    </main>
  )
}

export default Main
