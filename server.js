const express = require('express')
const path = require('path')
const app = express()
const port = 9000

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
//   res.send('Hello World!')
  // console.log(__dirname)
  res.sendFile(path.resolve(__dirname, '/build', 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})