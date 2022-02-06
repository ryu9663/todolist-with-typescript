# 타입스크립트로 TodoList 만들기

---

### 구현된 기능
  - CRUD
  - 완료한 항목과 미완료된 항목 구분

![화면 기록 2022-02-06 오전 1 24 41](https://user-images.githubusercontent.com/66232436/152650007-45b6ab47-2730-42cd-88c6-6b2922d1bd7b.gif)


---

### 교훈 : id는 고유할 뿐 아니라 <strong>어디에도 의존되면 안된다.</strong>


CUD과정에서 항목들을 추적하기 위해 각 항목들에 id를 할당해주었는데,
```
const addNewTodo = (newTodo: string) => {
    const newTodoList = {
      id: todos.length + 1, // 이부분
      text: newTodo,
      complete: false,
    };
    setTodos([...todos, newTodoList]);
    // setModalHandler(false);
  };
  ```
위와 같이 id를 배열의 크기에 의존되게 하다보니

항목을 추가 삭제 추가 삭제 반복했을때, 순서가 뒤엉켜 실제 id순서와 인덱스 순서가 일치하지 않고 엉뚱한 값이 수정 혹은 삭제 되는 문제가 있었다.

이를 해결하기 위해 별별짓 다해보다가 mysql의 data_id가 필요하다는 결론을 내렸다.

db를 세팅하긴 귀찮아서 그냥 text를 id로 설정해주었다.

id를 고유하게 만드니 해결되었다.

---








