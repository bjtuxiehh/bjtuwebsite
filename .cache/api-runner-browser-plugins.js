module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/mac/Documents/bjtuWebsite/website/node_modules/gatsby-remark-images","id":"654af500-6730-552c-bcf4-d3c4ff0b9d46","name":"gatsby-remark-images","version":"3.1.38","pluginOptions":{"plugins":[],"maxWidth":820,"quality":90,"linkImagesToOriginal":false},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":820,"quality":90,"linkImagesToOriginal":false}}]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":820,"quality":90,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Emma - @lekoarts/gatsby-theme-emma","short_name":"Emma","description":"Minimalistic bright portfolio with full-width grid and large images","start_url":"/","background_color":"#fff","theme_color":"#b83280","display":"standalone","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
