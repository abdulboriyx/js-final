let toDoList = ['read Ben Franklin', 'watch Oppenheimer'];
rendertodoList();


// Practice 2
function rendertodoList() {
 let toDoListHTML = '';
  for (i = 0; i < toDoList.length; i++) {
    const todo = toDoList[i];
    const htmlText = `<p>${todo}</p>`;
    toDoListHTML += htmlText;
  }
  // console.log(toDoListHTML);
  document.querySelector('.container').innerHTML = toDoListHTML;
  }

// Practice 1
function addToDo() {
 const inputElem = document.querySelector('.name-input');
 const inputValue = inputElem.value;

 toDoList.push(inputValue);
 console.log(toDoList);

inputElem.value = '';
rendertodoList();
}
