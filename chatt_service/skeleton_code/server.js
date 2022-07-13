const express = require('express');
const http = require('http')
const app = express();
const path = require("path")
const server = http.createServer(app)
// express가 http를 통해서 구현
const socket = require('socket.io')
const io = socket(server);


app.use(express.static(path.join(__dirname)))

const PORT = process.env.PORT | 3000;

// connection이 이루어지면 정보를 socket에 담는다.
io.on("connection", (socket) => {
    // 프론트에서 받기 
    socket.on("chatting", (data) => {
        console.log(data);
        // 받은 후 프론트에 전송하기 
        io.emit("chatting", `그래 반가워 ${data}`)
    })
})


server.listen(PORT, () => console.log(`server is running ${PORT}`))