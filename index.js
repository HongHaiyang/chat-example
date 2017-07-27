let app = require('express')()
let http = require('http').createServer(app)
let io = require('socket.io')(http)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg)
        console.log('message: ' + msg)
    })
    console.log('a user connected')
})




http.listen(3001, function () {
    console.log('listening on *:3001')
})