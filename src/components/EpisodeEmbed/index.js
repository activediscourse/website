import React from "react"

export const EpisodeEmbed = ({ guid, className, theme = "minimal" }) =>
  <iframe
    src={`https://pinecast.com/player/${guid}?theme=${theme}`} seamless
    className={className} frameBorder="0">
  </iframe>
