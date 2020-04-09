const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))
app.get('/', (req, res) => {
  res.end(`A: ${votes.a}\nB: ${votes.b}`)
})

votes = {
  a: 0,
  b: 0
}
app.post('/', (req,res) => {
  votes[req.body.vote]++
  res.end(votes[req.body.vote])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
