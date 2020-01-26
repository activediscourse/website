module.exports = {
  title: 'Active Discourse',
  tagline: 'The Technology Roundtable Podcast',
  url: 'https://activediscourse.github.io',
  baseUrl: '/website/',
  favicon: 'img/favicon.ico',
  organizationName: 'activediscourse',
  projectName: 'website',
  themeConfig: {
    navbar: {
      title: 'Active Discourse',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ACD-Website-Logo.svg',
      },
      links: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/activediscourse/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Subscribe',
          items: [
            {
              label: 'Apple Podcasts',
              href: 'https://podcasts.apple.com/us/podcast/active-discourse/id1473894855',
            },
            {
              label: 'Google Podcasts',
              href: 'https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&apn=com.google.android.music&link=https://play.google.com/music/m/Iqdahpenjqkuwptvqmaxcay7suu?t%3DActive_Discourse%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/website',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/website',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/activediscourse/website',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ActiveDiscourse',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/activediscourse/website/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
