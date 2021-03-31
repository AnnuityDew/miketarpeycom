/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"

interface ContentWrapperProps {
  children: React.ReactNode
  wrapperGridColumns?: Array<string>
}

const GriddedIndexSection = styled.section`
  padding: 10px 0;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
`

export const CardGrid = ({
  children,
}: ContentWrapperProps) => (
  <GriddedIndexSection>
    {children}
  </GriddedIndexSection>
)

export const ContentWrapper = ({
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
