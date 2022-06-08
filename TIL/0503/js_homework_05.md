## Q.1

1. T
2. T
3. T



## Q.2

처음에 console.log('Hello SSAFY!') 부분이 Call Stack에 쌓이고 처리하게 된다. 그후 setTimeout 함수가 Call Stack에 쌓이고 이 부분에서 처리는 Web API로 보내고  Web API에서 setTimeout 요청을 처리한다. 이 처리 시간은 1초이다. 그동안, console.log('Bye SSAFY!')가 Call stack에 추가되고 처리되고 그 후 처리된 setTimeout은 Task Queue로 보내졌다가 Call Stack이 비워지자 Event Loop에 의해서 다시 Call Stack으로 온 후 나머지 과정을 처리한다. 