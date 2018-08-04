const express = require('express')
const app = express()

const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const compiler = webpack(webpackConfig)

app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  logLevel: 'silent'
}))

app.use(require("webpack-hot-middleware")(compiler))

// app.use(express.static('public'))

// app.get("/", function (request, response) {
//   response.sendFile(__dirname + '/views/index.html')
// })

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
