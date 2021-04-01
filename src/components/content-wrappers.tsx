import React from "react"
import styled from "styled-components"

interface ContentWrapperProps {
  children: React.ReactNode
  wrapperGridColumns?: Array<string>
}

const GriddedIndexSection = styled.section`
  padding: 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
`

export const CardGrid = ({
  children,
}: ContentWrapperProps) => (
  <GriddedIndexSection>
    {children}
  </GriddedIndexSection>
)
