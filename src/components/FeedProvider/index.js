import React, { createContext, useEffect, useState } from "react"
import Rss from "rss-parser"

const parser = new Rss()

const getEpisodeGuid = episode =>
  new URL(episode.enclosure.url).pathname.split("/").pop().replace(".mp3", "")

const normalizeFeedItems = feed => {
  if (!feed || feed.items.length < 1) return

  feed.items = feed.items.map(item => ({
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
      parser.parseURL("https://pinecast.com/feed/activediscourse")
        .then(feed => setState({ ...state, feed: normalizeFeedItems(feed) }))
    }
  })

  return <FeedContext.Provider value={[state, setState]}>
    {children}
  </FeedContext.Provider>
}
