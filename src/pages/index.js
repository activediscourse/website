import React from "react"
import classes from "classnames"

import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"

import { EpisodeList } from "@site/src/components/EpisodeList"
import { FeedProvider } from "@site/src/components/FeedProvider"
import { LatestEpisode } from "@site/src/components/LatestEpisode"

import styles from "./styles.module.css"
import commonStyles from "@site/src/common/styles.module.css"

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      title={siteConfig.title}
      description="Active Discourse - the tech roundtable podcast for Apple, Google, Microsoft, Sony & more">
      <FeedProvider>
        <header className={classes("hero hero--primary", styles.heroBanner)}>
          <div className="container">
            <p className="hero__subtitle">
              THE LATEST EPISODE
            </p>
            <LatestEpisode />
          </div>
        </header>

        <main>
          <div className="container">
            <EpisodeList start={1} />
          </div>

          <section className={commonStyles.mainControls}>
            <div className="container">
              <div className={classes("row", commonStyles.buttons)}>
                <div>
                  <Link
                    className={classes(
                      "button button--primary button--lg",
                      styles.getStarted
                    )}
                    to={useBaseUrl("episodes")}>
                    SEE ALL EPISODES
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>
      </FeedProvider>
    </Layout>
  )
}

export default Home
