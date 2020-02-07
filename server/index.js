if (typeof window === 'undefined') {
  global.window = {}
}
const path = require('path')
const fs = require('fs')
const express = require('express')
const {renderToString} = require('react-dom/server')
const SSR = require('../dist/js/react-server')
const template = fs.readFileSync(path.resolve(__dirname, '../dist/react.html'), 'utf-8')

const renderMarkup = (str) => {
  return template.replace('<!--HTML_PLACEHOLDER-->', str)
}
function server (port) {
  const app = express()
  app.use(express.static('dist'))
  app.get('/react', (req, res) => {
    const html = renderMarkup(renderToString(SSR))
    res.status(200).send(html)
  })

  app.listen(port, () => console.log('server is running on' + port))
}
server(process.env.PORT || 3000)
