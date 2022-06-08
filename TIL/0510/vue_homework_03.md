## Q.1

1.  F
2.  T
3.  T



## Q.2



모든 props는 하위 속성과 상위 속성 사이의 **단방향** 바인딩을 형성합니다. 상위 속성이 업데이트되면 하위로 흐르게 되지만 그 반대는 안됩니다. 이렇게하면 하위 컴포넌트가 실수로 부모의 상태를 변경하여 앱의 데이터 흐름을 추론하기 더 어렵게 만드는 것을 **방지할 수** 있습니다



## Q.3

**Vue.componet**에 **Vue인스턴스의 이벤트를 바인딩**



## Q.4

(a) - this.$emit

(b) - @add-todo = "onAddTodo"

(c) - onAddTodo(newValue) {

console.log(newValue)}