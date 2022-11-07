const todoform = document.getElementById("todo-form");
const inputform = document.querySelector("#todo-form input");
const todolistUl = document.getElementById("todolist");

todoform.addEventListener("submit", handleInput);
// input을 submit했을 때 실행될 함수 handleInput

function handleInput(event) {
  event.preventDefault();
  // submit 시 새로고침 방지
  const todo = inputform.value;
  // input의 value 값을 todo에 저장
  console.log(todo);
  // test
  inputform.value = "";
  // input 내부 텍스트 비워주기
  const li = document.createElement("li");
  // li element 생성하기
  li.append(todo);
  // 저장한 value 값인 todo 보내주기
  const delBtn = document.createElement("button");
  // delete button 생성하기
  delBtn.innerHTML = "❌";
  // delete button value 넣어주기
  li.append(delBtn);
  // delete button  todo 다음으로 넣어주기
  console.dir(delBtn);
  // delBtn 파악하기
  todolistUl.appendChild(li);
  // li를 ul 아래로 넣어주기
  delBtn.addEventListener("click", delTodo);
  // delbtn을 눌렀을 때 삭제하기
  function delTodo() {
    // 삭제버튼 눌렀을 때 실행하여 해당 항목을 지워준다
    li.remove();
    // 해당 li를 없애기 li.remove 사용
  }
  let todos = localStorage.setItem("todos", todo);
  // local storage에 저장하기
}

// 새로고침해도 list 유지되게 하기 -> 로컬스토리지에 저장하고 불러오게 하기
// local storage 상의 데이터가 input할 때마다 사라지지 않게 하기
// local staroge 상에 데이터가 array로 저장되게 하기
// local storage 상의 데이터 가져오는 법
// del Btn 누를 때 local storage 상의 데이터도 인식해서 같이 사라지게 하기
