"use strict"
// java 오류줄이기
const socket = io();
var nickname = document.querySelector("#nickname")

const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input")
const sendButton = document.querySelector(".send-button")
const displaycontianer = document.querySelector(".display-container")

chatInput.addEventListener("keypress", (event) => {
    if(event.keyCode === 13){
        send()        
    }
})

function send(){
   
    
    // 입력된 메세지가 없으면 채팅이 안보내지게 함
    if (chatInput.value === ""){
        return
    }
    const param = {
        name : nickname.value,
        msg : chatInput.value
    }
    socket.emit("chatting", param) // 채팅 보내기 
    chatInput.value = ""

}

sendButton.addEventListener("click", send)
// 연결


socket.on("chatting", (data) => {
    const {name, msg, time, user_num} = data; // distructuring
    const item = new LiModel(name, msg, time, user_num); //Limodel 인스턴스화
    item.makeLi()
    displaycontianer.scrollTo(0, displaycontianer.scrollHeight)
        
}) //서버에서 받기 

socket.on('disconnected', (data) => {
    const {name} = data;
    const li = document.createElement("li")
    li.classList.add("received")
    const dom = `<span class="profile">
    <span class="user">관리자</span>
    <img class = "image" src="https://placeimg.com/50/50/any" alt="any">
    </span>
    <span class="message">${name}님이 나가셨습니다.</span>
    <span class="time">공지</span>` 
    li.innerHTML = dom;
    chatList.appendChild(li)
})


// 채팅메세지 출력하는 함수
function LiModel(name, msg, time, user_num){
    this.name = name;
    this.msg = msg;
    this.time = time;
    this.user_num = user_num;

    this.makeLi = () => {
        const li = document.createElement("li")
        if (nickname.value === "") {
            nickname.value = `익명 ${this.user_num}`            
        }
        li.classList.add(nickname.value === this.name ? "sent" : "received")
        const dom = `<span class="profile">
        <span class="user">${this.name}</span>
        <img class = "image" src="https://placeimg.com/50/50/any" alt="any">
    </span>
    <span class="message">${this.msg}</span>
    <span class="time">${this.time}</span>`
    li.innerHTML = dom;
    chatList.appendChild(li)
    
    }
}

console.log(socket);