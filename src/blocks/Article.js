import React from "react"
import styled from 'styled-components'

import {p as P} from '../components/HtmlElements'
import DownloadLink from '../components/DownloadLink'

export function Article({ data }) {
  const {text, text2, file} = data
  return (
    <>
      <LargeText>
        {text}
      </LargeText>
      <SmallText>
        {text2}
      </SmallText>      
      filename: {file}
      <DownloadLink text=".PDF" href={file} />
    </>
  )
}

const LargeText = styled.p`
  font-size: 30px;
`

const SmallText = styled.p`
`

export const ArticleBlock = {
  label: "Article",
  name: "article",
  defaultItem: {
    text: `„It was due to the new system, that
        humanity redifined its relation to
        nature. Today, <mark>nature is an active</mark>
        political agent: land, water, air and
        light cannot be owned anymore.“`,
    text2: 'Conversation with Eyal Weizman',
    file: ''
  },
  fields: [
    { name: "text", label: "Text", component: "html" },
    { name: "text2", label: "Small Text", component: "text" },
    {
      name: "file",
      label: "PDF",
      component: "file",
      description: 'This is a pdf upload field',
      /*accept: 'application/pdf',*/
      clearable: true,
      parse: (file) => `/pdfs/${file}`,
      uploadDir: () => '/content/pdfs/', 
    },
  ],
}
