import React from 'react'
import styled from 'styled-components'
import { Link } from '../components/Router'

import ButtonSmall from '../components/ButtonSmall'
import { p as P } from '../components/HtmlElements'

export const ImpLink = props =>  {
  const {text} = props.data
  return <Container>
    <Link to="/imprint">
      <ButtonSmall textOffset="3px" theme="light">
        { text }
      </ButtonSmall>
    </Link>
  </Container>
}

export const ImpLinkBlock = {
  label: "Imprint Link",
  name: "ImpLink",
  key: "dunno",
  defaultItem: {
    text: "IMP.",
  },
  fields: [
    { name: "text", label: "Link Text", component: "text" },
  ],
}

const Container = styled(P)`
  text-align: center;
`


