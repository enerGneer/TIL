const todoform = document.getElementById("todo-form"); // from HTML form
const input = document.querySelector("#todo-form input"); // from HTML input in form
const todolistUl = document.getElementById("todolist"); // from HTML ul

let todosArr = []; //array의 형태로 todo list 저장되도록 하기

todoform.addEventListener("submit", handleSubmit); // input을 submit했을 때 실행되는 함수 handleInput

function handleSubmit(event) {
  // input submit시 실행되는 함수
  event.preventDefault(); // submit 시 새로고침 방지
  const newTodo = input.value; // input의 value 값을 todo에 저장
  input.value = ""; // input 내부 텍스트 비워주기
  const newTodoObj = {
    // id 부여를 위한 object 추가
    text: newTodo, // value값을 text로 저장
    id: Date.now(), // 현재 시간을 id로 저장
  };
  console.log("Input value : ", newTodoObj);
  // test : input value 출력 확인
  todosArr.push(newTodoObj);
  // push로 array에 추가해주기
  console.log("Array : ", newTodoObj);
  // text : todo Array 확인

  saveTodoLS(); // Local Storage에 저장하는 함수로 넘겨주기
  createList(newTodoObj); // list 만들어주는 함수로 넘겨주기
}

function createList(todo) {
  // todo에 넣을 항목 받아와서 리스트에 생성해주는 함수
  const li = document.createElement("li"); // li element 생성하기
  li.id = todo.id; // li에 ID 부여하기
  const span = document.createElement("span"); // button 생성을 위해 value를 span으로 감싸주기
  span.innerText = todo.text; // 저장한 value 값인 todo 보내주기
  const delBtn = document.createElement("button"); // delete button 생성하기
  delBtn.innerText = "❌"; // delete button value 넣어주기
  delBtn.addEventListener("click", delTodo); // delbtn을 눌렀을 때 삭제하기 위해 delTodo 함수 실행

  li.appendChild(span); // li 하위에 span 먼저 넣어주고
  li.appendChild(delBtn); // li 하위에 span 다음에 오도록 delete button 넣어주기
  todolistUl.appendChild(li); // li를 ul 아래로 넣어주기
}

function delTodo(event) {
  // 삭제버튼 눌렀을 때 실행하여 해당 항목을 지워주기
  console.dir(event.target.parentElement);
  // text : target li를 확인
  const li = event.target.parentElement; // button click event가 target으로 하는 parentElement를 li로 선언
  li.remove(); // 해당 li 삭제

  // Local Storage 상의 데이터도 삭제하기
  // 1. array를 먼저 조정하고
  todosArr = todosArr.filter((item) => item.id !== parseInt(li.id));
  // array의 각 항목을 filter로 보내 확인 후 맞는 것만 남기기
  // 이걸로 기존의 arry를 덮어씌운다
  // id는 숫자기 때문에 parseInt로 숫자끼리 비교할 수 있도록 바꿔준다
  saveTodoLS();
  // LS에 이걸 반영하자
}

function saveTodoLS() {
  localStorage.setItem("todos", JSON.stringify(todosArr));
  // Arr todos를 Local Storage에 저장하기
  // Json.stringify로 string으로 바꿔줘야 LS에 넣을 수 있다!!
}

const savedTodos = localStorage.getItem("todos");
if (savedTodos !== null) {
  // 페이지 시작할 때 LS 값이 null이 아니면 페이지를 시작할 때 local storage 상의 데이터 가져오기
  const parsedTodos = JSON.parse(savedTodos);
  // parse로 다시 기능할 수 있도록 바꿔준 걸 parsedTodos로 정의
  todosArr = parsedTodos;
  // 현재 arr로 반영해주기
  parsedTodos.forEach(createList);
  // 하나씩 createList 만들기로 보내주기
}
