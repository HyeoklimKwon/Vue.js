const express = require('express');
const http = require('http');
const moment = require('moment');
const app = express();
const path = require("path")
const server = http.createServer(app)
// express가 http를 통해서 구현
const socket = require('socket.io')
const io = socket(server);


app.use(express.static(path.join(__dirname)))

const PORT = process.env.PORT | 3000;

var user_num = 0
var current_num = 0
// connection이 이루어지면 정보를 socket에 담는다.
io.on("connection", (socket) => {
    // 프론트에서 받기
    user_num = user_num + 1
    current_num = current_num + 1
    console.log(user_num);
    socket.on("chatting", (data) => { 
        var {name, msg} = data;
        if (name === "") {
            name = `익명 ${user_num}`            
        }    
        // 받은 후 프론트에 전송하기 
        io.emit("chatting", {
            name,
            msg,
            time: moment(new Date()).format("h:mm A"),
            user_num
        })

    })

    socket.on('disconnect', function (data) {
        current_num = current_num - 1
        const {name} =data             
        console.log(user_num);
        io.emit('disconnected', {
            name            
        });
    })
})

server.listen(PORT, () => console.log(`server is running ${PORT}`))


