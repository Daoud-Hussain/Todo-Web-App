const newItemInput = document.getElementById('new-item-input');
const todoList = document.getElementById('todo-list');
const listContainer = document.getElementById('container');

newItemInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && newItemInput.value !== '') {
    const listItem = document.createElement('li');
    const itemText = document.createElement('p');
    itemText.textContent = newItemInput.value;
    listItem.appendChild(itemText);
    itemText.classList.add('list');

    const editIcon = document.createElement('i');
    editIcon.className = 'fas fa-edit';
    editIcon.addEventListener('click', () => {
      const editableInput = document.createElement('input');
      editableInput.type = 'text';
      editableInput.value = itemText.textContent;

      listItem.replaceChild(editableInput, itemText);

      editableInput.focus();

      editableInput.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
          itemText.textContent = editableInput.value;
          listItem.replaceChild(itemText, editableInput);
          storeData();
        }
      });
    });
    listItem.appendChild(editIcon);

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash';
    deleteIcon.addEventListener('click', () => {
      listItem.remove();
      storeData();
    });
    listItem.appendChild(deleteIcon);

    todoList.appendChild(listItem);
    newItemInput.value = '';

    storeData();
  }
});

function storeData() {
  localStorage.setItem('data', todoList.innerHTML);
}

function showData() {
  const savedData = localStorage.getItem('data');
  if (savedData) {
    todoList.innerHTML = savedData;
    addEditAndDeleteEventListeners();
  }
}

function addEditAndDeleteEventListeners() {
  const editIcons = document.querySelectorAll('.fa-edit');
  const deleteIcons = document.querySelectorAll('.fa-trash');

  editIcons.forEach((editIcon) => {
    editIcon.addEventListener('click', () => {
      const listItem = editIcon.parentNode;
      const itemText = listItem.querySelector('p');

      const editableInput = document.createElement('input');
      editableInput.type = 'text';
      editableInput.value = itemText.textContent;

      listItem.replaceChild(editableInput, itemText);

      editableInput.focus();

      editableInput.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
          itemText.textContent = editableInput.value;
          listItem.replaceChild(itemText, editableInput);
          storeData();
        }
      });
    });
  });

  deleteIcons.forEach((deleteIcon) => {
    deleteIcon.addEventListener('click', () => {
      const listItem = deleteIcon.parentNode;
      listItem.remove();
      storeData();
    });
  });
}



// Shifting to light theme
const light = document.getElementById('light-theme');
const container = document.getElementById('container');
const card = document.getElementById('card');
let count = 1;

light.addEventListener('click', toggleThemes);
function toggleThemes() {
  if (count % 2 !== 0) {
    container.classList.remove('dark-container');
    container.classList.add('light-container');
    card.classList.remove('light-card');
    card.classList.add('dark-card');

    const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>`;
    document.querySelector('.light-theme').innerHTML = darkIcon;
    count++;
  } else {
    container.classList.remove('light-container');
    container.classList.add('dark-container');
    card.classList.remove('dark-card');
    card.classList.add('light-card');

    const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>`;
    document.querySelector('.light-theme').innerHTML = lightIcon;
    count++;
  }
}


showData();
// localStorage.clear()
