import React, {Fragment} from "react"
import styled from 'styled-components'

import {p as P} from '../components/HtmlElements'
import ButtonSmall from '../components/ButtonSmall'
import { Link } from '../components/Router'

export function News({ data }) {
  console.log(data)
  const {newsItems} = data
  return (
    <>
      <h2>NEWS</h2>
      {newsItems.map(newsItem => renderNewsItem(newsItem))}
    </>
  )
}

function renderNewsItem(newsItem) {
  const {text, link} = newsItem
  return <div>
    <P>
    +++ {text} +++
    </P>
    <Link to={link}>
      <ButtonSmall textOffset="3px" theme="light">
        Link
      </ButtonSmall>
    </Link>  
  </div>
}

export const NewsBlock = {
  label: "News",
  name: "news",
  defaultItem: {
    text: `Oditesto denitisquam nus quamend ipsam, sus ma dolut est voluptam diciis dem ut quas que qui quibusdamet ut et denitisquam nus quamend.`,
    link: 'http://artsoftheworkingclass.org/'
  },
  fields: [
    {
      label: "News Items",
      name: "newsItems",
      component: "group-list",
      itemProps: item => ({
        key: item.text + item.link + "",
        label: "News Item",
      }),
      fields: [
        {
          label: "Text",
          name: "text",
          component: "text",
        },
        {
          label: "Link",
          name: "link",
          component: "text",
        },
      ],
    },    
  ],
}
