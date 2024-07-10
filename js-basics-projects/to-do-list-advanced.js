let toDoList = [
  {
    name:'read Ben Franklin',
    dueDate: '2024-7-9'},
  {
    name: 'watch Oppenheimer',
    dueDate: '2024-7-10'
  },
];
rendertodoList();


// Practice 2
function rendertodoList() {
 let toDoListHTML = '';

 toDoList.forEach((todoObject, index) => {
  const { name, dueDate } = todoObject;

  const htmlText = `
   <div>${name}</div>
   <div>${dueDate}</div>
   <button class="delete-button js-delete-button">Delete</button>

    `;
    toDoListHTML += htmlText;
 })
  // console.log(toDoListHTML);
  document.querySelector('.js-todo-list').innerHTML = toDoListHTML;

  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) =>{
    deleteButton.addEventListener('click', ()=>{
      toDoList.splice({index}, 1);
      rendertodoList();
    })
  })

  }

// Practice 1

document.querySelector('.js-add-button').addEventListener('click', ()=>{
  addToDo();
});

function addToDo() {
 const inputElem = document.querySelector('.name-input');
 const name = inputElem.value;

 const dateElem = document.querySelector('.js-date-input');
 const dueDate = dateElem.value;



 toDoList.push({
  name,
  dueDate
  // name: name
  // dueDate: dueDate
 });


inputElem.value = '';
dateElem.value = '';
rendertodoList();
}
