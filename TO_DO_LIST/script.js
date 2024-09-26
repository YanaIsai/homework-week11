let input = document.querySelector('input');
let button = document.querySelector('button');
let list = document.querySelector('ul');


function addTask() {
    const newTask = document.createElement('li');
    newTask.textContent = input.value;
    list.append(newTask);
    input.value = '';
}


list.addEventListener('click', function (evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('line-through');
    }
});
