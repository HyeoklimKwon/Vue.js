# TIL

### 0616 웹 소켓을 이용하여 채팅방 만들기

#### server

```javascript
// connection이 이루어지면 정보를 socket에 담는다.
io.on("connection", (socket) => {
    // 프론트에서 받기
    user_num = user_num + 1
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
    
   server.listen(PORT, () => console.log(`server is running ${PORT}`))
    // 서버 시작하기 
```

#### client

```javascript
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

const item = new LiModel(name, msg, time, user_num); //Limodel 인스턴스화
    item.makeLi()
    displaycontianer.scrollTo(0, displaycontianer.scrollHeight)

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
    // 아예 dom에 넣는 방식을 하였다.
```





- 웹소켓은 웹 서버와 웹 브라우저 간의 **양방향** 통신을 위한 프로토콜이다.

- 사용자가 웹사이트에 접속하게 되면 socket.io에 의해 'connection' event가 자동으로 발생된다.  이때 함수에는 접속한 사용자의 socket이 parameter로 전달된다. 

-  'connection' event listener에 event가 발생하면 한번만 일어나는 코드들입니다. console.log로 접속자의 socket.id를 출력하고 사용자 이름을 만든 후 'change name'이란 event를 발생시킵니다. **`io.to(socket.id).emit` 을 사용하여 해당 socket.id에만 event를 전달한다.

- 'send message' event listener는 이 event를 받은 후 **`io.emit`을 사용하여 모든 클라이언트들에게 event를 전달**합니다.
