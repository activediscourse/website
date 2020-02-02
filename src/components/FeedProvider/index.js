import React, { createContext, useEffect, useState } from "react"
import parsePodcast from "@activediscourse/podcast-parser"

const feedUrl = "https://pinecast.com/feed/activediscourse"

const getEpisodeGuid = episode =>
  new URL(episode.enclosure.url).pathname.split("/").pop().replace(".mp3", "")

const normalizeFeed = feed => {
  if (!feed || feed.episodes.length < 1) return

  feed.episodes = feed.episodes.map(item => ({
    ...item,
    guid: getEpisodeGuid(item)
  }))

  return feed
}

export const FeedContext = createContext([{}, () => {}])

export const FeedProvider = ({ children }) => {
  const [state, setState] = useState({})

  useEffect(() => {
    if (!state.feed) {
      window.fetch(feedUrl)
        .then(res => res.text())
        .then(xml => parsePodcast(xml))
        .then(feed => {
          setState({ ...state, feed: normalizeFeed(feed) })
        })
        .catch(e => console.log(e))
    }
  })

  return <FeedContext.Provider value={[state, setState]}>
    {children}
  </FeedContext.Provider>
}
