const express = require('express')
const { v4: uuid } = require('uuid')

const app = express()
const { getPort, getBaseURL } = require('./config.js')

const webhooks = []

app.get('/', (_, res) => res.json({ webhooks }))

const getWebhookUrlById = (id) => `${getBaseURL()}/w/${id}`

app.get('/create', (req, res) => {
  const id = uuid()
  const name = req.query.name
  const events = []
  webhooks.push({ id, name, events })
  res.json({ id, name, url: getWebhookUrlById(id) })
})

// webhook front-end
app.get('/webhook/{id}', (req, res) => {
  const ix = webhooks.findIndex((w) => w.id == req.params.id)
  res.json({ webhook: webhooks[ix] })
})

// webhook back-end
app.all('/w/{id}', (req, res) => {
  const ix = webhooks.findIndex((w) => w.id == req.params.id)
  const { method, url, headers, params, body } = req
  webhooks[id]['events'].push({ method, url, headers, params, body })
  res.json({ webhook: webhooks[ix] })
})

app.listen(getPort(), () => {
  console.log(`Example app listening on PORT ${getPort()}`)
})
