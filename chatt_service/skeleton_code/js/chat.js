"use strict"
// java 오류줄이기
const socket = io();
// 연결
socket.emit("chatting", "from front") // 채팅 보내기 

socket.on("chatting", (data) => {
    console.log(data);
}) //서버에서 받기 

console.log(socket);