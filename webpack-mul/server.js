let express = require('express')

let app = express()

app.get('/user', (req, res) => {
  res.json({
    name: "hello1"
  })
})

app.listen(3000 )