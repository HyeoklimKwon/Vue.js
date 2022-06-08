## Q.1

1. F 
2. F
3. F 
4. F



## Q.2

```javascript
const numbers = [1, 2, 3, 4, 5]
const arrayTest = []
let k = 0
for (let value of numbers) {
    console.log(value) # 각 구성 요소들 출력
    k +=  value
    console.log(value += 10) # 각 구성 요소들 + 10 출력
    if (value % 2){
        value -= 10
       	arrayTest.push(value)             
    }
}
console.log(arrayTest) # 새로운 배열 출력
console.log(k)# 모두 더한 값 출력
```

