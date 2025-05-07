const http = require('http')
const port = 3000

const server = http.createServer((request, response) => {
  const path = request.url.replace(/\/?(?:\?.*)?/, '').toLowerCase()
  switch (path) {
    case '':
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.end('Homepage')
      break
    case '/about':
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.end('About Page')
      break
    case '/404':
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.end('Not Found')
      break
    default:
      response.writeHead(301, {
        'Content-Type': 'text/plain',
        Location: '/404',
      })
      response.end()
  }
})

server.listen(port, () => {s
  console.log(`server started on port ${port}`)
  console.log('press Ctrl-C to terminate....')
})