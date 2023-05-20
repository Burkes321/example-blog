
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


// TODO: will be nice to clean this up and split it into modules
app.use(cors())
app.use(express.urlencoded({ extended: true }))

const pgp = require('pg-promise')()
const cn = {
  host: 'localhost',
  post: '5432',
  database: 'example-blog',
  user: 'sam',
  password: 'password',
}

const db = pgp(cn)
db.connect()

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/test-route', (_req, res) => {
  res.send({ message: 'hello world!' })
})

app.get('/post-form-data', (req, res) => {
  res.send('get route for posting form data')
})

app.post('/post-form-data', (req, res) => {
  const title = req.body.title
  const author = req.body.author

  db.query('INSERT INTO article (title, author) VALUES ($1, $2) RETURNING *', [title, author])

  res.send('received post!')
})