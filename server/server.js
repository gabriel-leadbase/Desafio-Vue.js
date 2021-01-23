const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.created_at = new Date()
    req.body.updated_at = new Date()
  }
  next()
})

server.use((req, res, next) => {
  if (req.method === 'PUT' || req.method === 'PATCH') {
    req.body.updated_at = new Date()
  }
  next()
})

server.use(router)

server.listen(port)
