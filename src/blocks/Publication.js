import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"
import get from "lodash.get"

import Document from '../components/Document'
import {p as P} from '../components/HtmlElements'
import DownloadLink from '../components/DownloadLink'

export function Publication({ data }) {
  const {text} = data
  return (
    <Document>
      {
        data.image &&
        data.image.childImageSharp && (
          <Img fluid={data.image.childImageSharp.fluid} />
        )
      }
      <P>
        {text}
      </P>
      <DownloadLink text=".PDF" />
    </Document>
  )
}

export const PublicationBlock = {
  label: "Publication",
  name: "publication",
  defaultItem: {
    image: "",
    text: `ARTS OF THE WORKING CLASS
            With texts by Olaf Grawert, Dorothee Hahn, Nils Havelka, Helene Hegemann, Holger Heissmeyer, Angelika Hinterbrandner, Nikolaus Hirsch, Fabrizio Hochschild Drummond, Ludger Hovestadt and many more`,
  },
  fields: [
    { name: "text", label: "Text", component: "text" },
    {
      label: "Image",
      name: "image",
      component: "image",
      parse: filename => `../images/${filename}`,
      uploadDir: () => `/content/images/`,
      previewSrc: (formValues, fieldProps) => {
        const pathName = fieldProps.input.name.replace("rawJson", "jsonNode")
        const imageNode = get(formValues, pathName)
        if (!imageNode || !imageNode.childImageSharp) return ""
        return imageNode.childImageSharp.fluid.src
      },
    },
  ],
}