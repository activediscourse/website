module.exports = {
  title: "Active Discourse",
  tagline: "The Technology Roundtable Podcast",
  url: "https://activediscourse.github.io",
  baseUrl: "/website/",
  favicon: "img/ACD-Website-Logo-300x300.png",
  organizationName: "activediscourse",
  projectName: "website",
  themeConfig: {
    navbar: {
      title: "Active Discourse",
      logo: {
        alt: "Active Discourse logo",
        src: "img/ACD-Website-Logo-300x300.png"
      },
      links: [
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/activediscourse/website",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Subscribe & Listen",
          items: [
            {
              label: "Apple Podcasts",
              href: "https://podcasts.apple.com/us/podcast/active-discourse/id1473894855"
            },
            {
              label: "Google Play",
              href: "https://play.google.com/music/m/Iqdahpenjqkuwptvqmaxcay7suu?t%3DActive_Discourse%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16"
            },
            {
              label: "Google Podcasts",
              href: "https://www.google.com/podcasts?feed=aHR0cHM6Ly9waW5lY2FzdC5jb20vZmVlZC9hY3RpdmVkaXNjb3Vyc2U%3D"
            },
            {
              label: "Spotify",
              href: "https://open.spotify.com/show/6d3Uvd1PLBU1nYb3IMND63"
            },
            {
              label: "Overcast",
              href: "https://overcast.fm/itunes1473894855/active-discourse"
            },
            {
              label: "Pocket Casts",
              href: "https://pca.st/hqte5uop"
            },
            {
              label: "RSS",
              href: "https://pinecast.com/feed/activediscourse"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/website"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/website"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/activediscourse/website"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ActiveDiscourse"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brett Koster & Bo Lingen`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/activediscourse/website/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
}
