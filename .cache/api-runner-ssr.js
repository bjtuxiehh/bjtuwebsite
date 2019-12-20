var plugins = [{
      plugin: require('/Users/mac/Documents/bjtuWebsite/website/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/Users/mac/Documents/bjtuWebsite/website/node_modules/gatsby-remark-images","id":"654af500-6730-552c-bcf4-d3c4ff0b9d46","name":"gatsby-remark-images","version":"3.1.38","pluginOptions":{"plugins":[],"maxWidth":820,"quality":90,"linkImagesToOriginal":false},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":820,"quality":90,"linkImagesToOriginal":false}}]},
    },{
      plugin: require('/Users/mac/Documents/bjtuWebsite/website/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mac/Documents/bjtuWebsite/website/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mac/Documents/bjtuWebsite/website/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mac/Documents/bjtuWebsite/website/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/mac/Documents/bjtuWebsite/website/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Emma - @lekoarts/gatsby-theme-emma","short_name":"Emma","description":"Minimalistic bright portfolio with full-width grid and large images","start_url":"/","background_color":"#fff","theme_color":"#b83280","display":"standalone","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('/Users/mac/Documents/bjtuWebsite/website/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
