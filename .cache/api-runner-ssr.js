var plugins = [{
      plugin: require('/Users/philip/development/portfolio-2018/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-71700644-2","head":false,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"optimizeId":"YOUR_GOOGLE_OPTIMIZE_TRACKING_ID","sampleRate":5,"siteSpeedSampleRate":10,"cookieDomain":"https://sharp-poincare-20a9cf.netlify.com/"},
    },{
      plugin: require('/Users/philip/development/portfolio-2018/node_modules/gatsby-plugin-intercom-spa/gatsby-ssr'),
      options: {"plugins":[],"app_id":"d7vu7om5"},
    },{
      plugin: require('/Users/philip/development/portfolio-2018/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/philip/development/portfolio-2018/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/philip/development/portfolio-2018/node_modules/gatsby-plugin-favicon/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/philip/development/portfolio-2018/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
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
