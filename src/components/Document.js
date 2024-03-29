import React from 'react'
import styled from 'styled-components'

import { snippets, colors, metrics, breakpoints } from '../../config/styles'

export default ({children}) =>  <Center>
    <Container>
      {children}
    </Container>
  </Center>

const Container = styled.div`
  background-color: ${ colors.white };
  margin-left: 20px;
  margin-right: 20px;  
  max-width: 440px; /* Textbreite 400px */
  font-size: ${ metrics.small.fontSizePx }px;
  line-height: ${ metrics.small.lineHeightPx }px;
  @media (min-width: ${breakpoints.smallPx+1}px) {
    font-size: ${ metrics.medium.fontSizePx }px;
    line-height: ${ metrics.medium.lineHeightPx }px;
    max-width: 780px; /* Textbreite 700px */
    margin-left: 120px;
    margin-right: 120px;
  }
  p {
    ${snippets.blockStyle}
  }
`

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`