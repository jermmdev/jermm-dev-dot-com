module.exports = {
  siteMetadata: {
    title: "JermmDev",
    author: "jermmdev",
    description: "A resume site built using Gatsby's Forty starter."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jermmDev',
        short_name: 'jermmDev',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'jermmdev.png', 
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: __dirname + '/postData',
        ignore: [`**/\.*`,`*\.jpg`,`*\.png`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: __dirname + '/postData',
        ignore: [`**/\.*`,`*\.json`]
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline'
  ],
}


//pathPrefix

// It’s common for sites to be hosted somewhere other than the root of their domain. Say we have a Gatsby site at example.com/blog/. In this case, we would need a prefix (/blog) added to all paths on the site.


// Polyfill

// Gatsby uses the ES6 Promise API. Because some browsers don’t support this, Gatsby includes a Promise polyfill by default.

// If you’d like to provide your own Promise polyfill, you can set polyfill to false.