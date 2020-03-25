const express = require('express')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware')

app.use(express.static('build'))
app.use('/', createProxyMiddleware({ target: 'http://127.0.0.1:9000', changeOrigin: true }))

app.get('*', (req, res) => {
    res.sendfile('./build/index.html')
})

app.listen(80, () => {
    console.log('Server Start Listening on: http://127.0.0.1')
})