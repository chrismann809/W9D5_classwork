const todos = [];
const ul = document.querySelector('.todos');
const form = document.querySelector('.add-todo-form');

const addTodo = (event) => {
    event.preventDefault();
    const input = document.querySelector('input[name="add-todo"]');
    const inputValue = input.value;
    const todoObj = {value: inputValue, done: false};
    todos.push(todoObj);
    input.value = "";
    populateList();
};

const populateList = () => {
    
    todos.forEach((todo, i) => {
        let li = document.createElement('li')
        let label = document.createElement('label');
        let checkbox = document.createElement('input');
        let text = document.createTextNode(todo.value)
        let ul = document.querySelector('.todos')

        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('data-index', `${i}`);
        checkbox.checked = todo.done;

        label.setAttribute('for', `item${i}`);
        label.appendChild(text);
        
        li.appendChild(label);
        li.appendChild(checkbox);

        ul.appendChild(li);
        console.log(li);
        console.log(ul);
    });
};


form.addEventListener('submit', addTodo);

populateList(todos);
window.todos = todos;
window.ul = ul;
window.form = form;
window.addTodo = addTodo;
window.populateList = populateList;