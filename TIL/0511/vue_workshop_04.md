가장 먼저 store 관련 js를 만들고 나와 있는대로 TodoList, TodoListItem, TodoForm을 생성한다. 

각자의 역할 중  TodoList는 TodoListItem으로부터 전달된 store에서 todos를 들고와서 리스트의 형태로 나열하는 역할을 맡는다. 이 과정에서 this.$store.state.todos를 사용하면 효과적이다. 

다음으로 TodoListItem은 기본적으로 TodoForm 에서 생성된 title를 새로 만들며, 삭제 버튼을 누를 경우 해당 매서드를 store으로부터 불러와 적용한다. 

TodoForm 과 같은 경우는 입력 후 특정 이벤트 즉, dispatch를 발생시켜 store에 새로운 todo가 전달되어 다시 TodoListItem으로 가게 한다. 

마지막으로 store 에서는 위에서 언급한 매서드들을 잘 이용할 수 있도록 mutations에는 생성과 삭제 함수를 actions에는 각 TodoListItem들에 적용할 수 있도록 작성한다.