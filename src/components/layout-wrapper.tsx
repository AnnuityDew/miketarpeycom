/** @jsx jsx */
import { jsx } from "theme-ui"

type LayoutWrapperProps = { children: React.ReactNode }

const LayoutWrapper = ({ children }: LayoutWrapperProps) => (
  <div
    sx={{
      display: `grid`,
      gridTemplateColumns: (t: any): any => [
        "1fr",
        "1fr",
        "1fr",
        "250px auto",
        "250px auto",
      ],
      fontSize: ["1.5rem", "1.5rem", "1.5rem", "1.5rem", "1.5rem"],
    }}
  >
    {children}
  </div>
)

export default LayoutWrapper
