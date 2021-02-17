/** @jsx jsx */
import { jsx } from "theme-ui"

type ContentWrapperProps = {
  children: React.ReactNode
  wrapperGridColumns: Array<string>
}

const ContentWrapper = ({
  children,
  wrapperGridColumns,
}: ContentWrapperProps) => (
  <div
    sx={{
      display: "grid",
      wrapperGridColumns: wrapperGridColumns,
      gridAutoRows: "auto",
      width: "100%",
      ul: {
        fontSize: ["16px", "16px", "20px", "24px", "24px"],
      },
      span: {
        fontSize: ["16px", "16px", "20px", "24px", "24px"],
        margin: "20px 40px",
      },
    }}
  >
    {children}
  </div>
)

export default ContentWrapper
