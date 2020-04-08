import React from "react"
import MainVideo from '../components/MainVideo'

export function TalkingHeads({ data }) {
  return (
    <>
      <MainVideo vimeoId={data.videoId} />
      {data.text}
      {data.text2}
    </>
  )
}

export const TalkingHeadsBlock = {
  label: "Talking Heads",
  name: "talkingHeads",
  id: "th",
  defaultItem: {
    videoId: "370256053",
    text: "„For those who never experienced a change of the political system, it seemed unimaginable. But it happened and it could happen again.“",
    text2: "Conversation with Charlotte Malterre",
  },
  fields: [
    { name: "videoId", label: "Vimeo Video ID", component: "text" },
    { name: "text", label: "Text", component: "text" },
    { name: "text2", label: "Small Text", component: "text" },
  ],
}
