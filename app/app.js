const express = require('express')
const app = express()
const port = 3005


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/hgfBundle.js', (req, res) => {
    res.sendFile(__dirname + '/hgfBundle.js');
  })

app.get('/wp-json/global-navigation/top-navigation', (req, res) => {
    res.contentType('application/json');
    res.sendFile(__dirname + "/navData.json");
})

app.listen(port, () => {
  console.log(`Example MFE Nav available at http://localhost:${port}`)
})