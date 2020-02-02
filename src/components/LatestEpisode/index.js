import React, { useContext } from "react"

import { EpisodeEmbed } from "@site/src/components/EpisodeEmbed"
import { FeedContext } from "@site/src/components/FeedProvider"
import { LoadingSpinner } from "@site/src/components/LoadingSpinner"

import commonStyles from "@site/src/common/styles.module.css"

export const LatestEpisode = () => {
  const [{ feed }] = useContext(FeedContext)

  if (feed && feed.episodes.length > 0) {
    const [latestEpisode] = feed.episodes

    return <EpisodeEmbed
      className={commonStyles.latestEpisodeEmbed}
      guid={latestEpisode.guid}
      theme="thick" />
  }

  return <div className={commonStyles.loadingWrapper}>
    <LoadingSpinner />
  </div>
}
