import React, { useContext } from "react"
import classes from "classnames"

import { EpisodeEmbed } from "@site/src/components/EpisodeEmbed"
import { FeedContext } from "@site/src/components/FeedProvider"
import { LoadingSpinner } from "@site/src/components/LoadingSpinner"

import styles from "./styles.module.css"
import commonStyles from "@site/src/common/styles.module.css"

export const EpisodeList = ({ start = 0, limit = 5, verbose = false } = {}) => {
  const [{ feed }] = useContext(FeedContext)

  if (feed && feed.items.length > start) {
    return feed.items.slice(start, limit + start).map((item, index) => {
      return <div
        id={`episode-${item.itunes.episode}`}
        className={classes("row", styles.episodeList)}
        key={index}>
        <div className={classes("col col--6", styles.episode)}>
          <div className="card">
            <div className={classes("card__header", styles.episodeHeader)}>
              <div className={classes("row", styles.episodeDetails)}>
                <div className={styles.episodeNumber}>
                  {"EPISODE " + item.itunes.episode}
                </div>
                <div className={styles.episodeDate}>
                  {new Date(item.isoDate).toLocaleDateString()}
                </div>
              </div>
              <h3>{item.title}</h3>
            </div>
            <div className="card__body">
              <p>
                {verbose ? item.contentSnippet : item.itunes.subtitle}
              </p>
            </div>
            <div className="card__footer">
              <EpisodeEmbed className={commonStyles.episodeEmbed} guid={item.guid} />
            </div>
          </div>
        </div>
      </div>
    })
  } else {
    return <div className={classes("row", styles.episodeList)}>
      <div className={styles.loadingWrapper}>
        <LoadingSpinner />
      </div>
    </div>
  }
}
