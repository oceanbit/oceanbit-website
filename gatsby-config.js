const buildMode = process.env.BUILD_ENV || "production";
const siteUrl =
  process.env.SITE_URL ||
  (buildMode === "production"
    ? "https://oceanbit.dev"
    : "https://beta.oceanbit.dev");

console.log(`Building for ${buildMode} at ${siteUrl}`);

module.exports = {
  siteMetadata: {
    title: `OceanBit`,
    siteUrl,
    description: `We build your favorite developer tools! Creators of GitShark, lovers of open source, and collective of quirky nerds!`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OceanBit`,
        short_name: `OceanBit`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#002BFF`,
        display: `minimal-ui`,
        icon: `src/assets/oceanbit_logo.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [`Roboto Mono:400`],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165366849-2",
        head: false,
        respectDNT: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        resolveEnv: () => buildMode,
        env: {
          development: {
            policy: [
              {
                userAgent: "*",
                disallow: "/",
              },
            ],
          },
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
              },
            ],
          },
        },
      },
    },
  ],
};
