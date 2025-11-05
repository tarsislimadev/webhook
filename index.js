const express = require('express')
const { v4: uuid } = require('uuid')

const app = express()
const { PORT } = require('./config.js')

const webhooks = []

app.get('/', (_, res) => res.json({ webhooks }))

const getWebhookUrlById = (id) => `${BASE_URL}/w/${id}`

app.get('/create', (req, res) => {
  const id = uuid()
  webhooks.push({ id, events: [] })
  res.json({ id, url: getWebhookUrlById(id) })
})

// webhook front-end
app.get('/webhook/{id}', (req, res) => {
  const ix = webhooks.findIndex((w) => w.id == req.params.id)
  res.json({ webhook: webhooks[ix] })
})

// webhook back-end
app.use('/w/{id}', (req, res) => {
  const ix = webhooks.findIndex((w) => w.id == req.params.id)
  const { url, headers, params, body } = req
  webhooks[id]['events'].push({ url, headers, params, body })
  res.json({ webhook: webhooks[ix] })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
