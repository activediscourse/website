import React from "react"

import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

import { EpisodeList } from "@site/src/components/EpisodeList"
import { FeedProvider } from "@site/src/components/FeedProvider"

const Episodes = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      title={`${siteConfig.title} Episodes`}
      description="Active Discourse - the tech roundtable podcast for Apple, Google, Microsoft, Sony & more">
      <FeedProvider>
        <main>

          <div className="container">
            <EpisodeList limit={Number.MAX_SAFE_INTEGER} verbose={true} />
          </div>

        </main>
      </FeedProvider>
    </Layout>
  )
}

export default Episodes
