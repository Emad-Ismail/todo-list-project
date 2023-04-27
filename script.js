document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text) {
            addTask(text);
            input.value = '';
        }
    });

    function addTask(text) {
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');

        const todoText = document.createElement('span');
        todoText.classList.add('todo-text');
        todoText.innerText = text;
        listItem.appendChild(todoText);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'X';
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);
    }
});
