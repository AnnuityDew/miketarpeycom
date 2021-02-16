/** @jsx jsx */
import { jsx } from "theme-ui"

type ContentWrapperProps = {
  children: React.ReactNode
  gridType: Array
  minItemHeight: String
}

const defaultGrid = ["1fr", "1fr", "1fr", "1fr 1fr", "1fr 1fr"]

const ContentWrapper = ({
  children,
  gridType = defaultGrid,
  minItemHeight = "50vh",
}: ContentWrapperProps) => (
  <div
    sx={{
      display: `grid`,
      gridTemplateColumns: gridType,
      gridAutoRows: "auto",
      width: "100%",
      ul: {
        fontSize: ["16px", "16px", "20px", "24px", "24px"],
      },
      span: {
        fontSize: ["16px", "16px", "20px", "24px", "24px"],
        margin: "40px",
      },
      section: {
        padding: "40px 0",
        fontWeight: "400",
        display: "flex",
        flexDirection: "column",
        minHeight: minItemHeight,
        justifyContent: "center",
        alignItems: "center",
      },
    }}
  >
    {children}
  </div>
)

export default ContentWrapper
