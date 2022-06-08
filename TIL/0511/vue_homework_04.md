## Q.1

1. F - Vuex는 써드파티로 생겨난 서비스임으로 없어도 된다.
2. T
3. F
4. T 



## Q.2

State : 중앙에서 관리하는 모든 상태 정보 (data)를 말한다. 여러 컴포넌트 내부에 있는 특정 state를 중아에서 관리하게 하고 state가 변화하면 해당 state를 공유하는 여러 컴포넌트의 DOM은 알아서 자동적으로 랜더링이 됨. 즉, 각 컴포넌트가 Vuex Store에서 정보를 가져와 사용한다.

Getters: state를 변경하지 않고 활용하여 계산을 수행하는 역할을 맡고 있다. compute를 사용하는 것처럼 getters는 저장소의 상태를 기준으로 계산한다. 

Muations: 실제로 stae를 변경하는 유일한 방법으로 볼 수 있다. mutation의 handler는 반드시 동기적이야 하고 첫 번째 인자로 항상 state를 받음

Actions : Mutations와 유사하지만 다음과 같은 차이점이 있다. state를 변경하는 대신 mutations를 commit() 매서드로 호출해서 실행하고 mutations와 달리 비동기 작업이 포함될 수 있다. context 객체 인자를 받는다. 컴포넌트에서 dispatch() 매서드에 의해 호출된다.



## Q.3

(a) - state :

(b) - getters 

(c) - mutations

(d) - state

