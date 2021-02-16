/** @jsx jsx */
import { jsx } from "theme-ui"

type LayoutWrapperProps = { children: React.ReactNode }

const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <div
    sx={{
      display: `grid`,
      gridTemplateColumns: [
        "[header] 1fr",
        "[header] 1fr",
        "[header] 1fr",
        "[header] 250px [full] auto",
        "[header] 250px [full] auto",
      ],
    }}
  >
    {children}
  </div>
)

export default LayoutWrapper
