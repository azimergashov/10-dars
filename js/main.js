const elForm = document.querySelector('.form');
const elInput = document.querySelector('.input');
const elInputTwo = document.querySelector('.input-right');
const elList = document.querySelector('.list');

const todos = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    const inputValue = elInput.value
    const inputValueTwo = elInputTwo.value

    const todo = {
        name: inputValueTwo,
        text: inputValue,
        id: todos.length
    }


    todos.push(todo)

    elInput.value = null;

    elList.innerHTML = null;

    for(let item of todos){
        const newLi = document.createElement("li");

        newLi.textContent = `${item.text} (after:${item.name})`
        elList.appendChild(newLi)
    }
})