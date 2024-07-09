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
  for (i = 0; i < toDoList.length; i++) {
    const todoObject = toDoList[i];

    const { name, dueDate } = todoObject;

    const htmlText = `
    <p>
    ${name} ${dueDate}
    <button onclick="
    toDoList.splice(${i}, 1);
    rendertodoList();
    ">Delete</button>
    </p>`;
    toDoListHTML += htmlText;

  }
  // console.log(toDoListHTML);
  document.querySelector('.container').innerHTML = toDoListHTML;
  }

// Practice 1
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
