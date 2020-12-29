module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"custom":{"families":["Roboto Mono"],"urls":["/fonts/fonts.css"]}},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":750,"linkImagesToOriginal":false,"showCaptions":true},
    }]
