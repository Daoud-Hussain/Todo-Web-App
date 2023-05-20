const input = document.getElementById('search-box');
const listContainer = document.getElementById('listItems');


function addListItem(){
    if(input.value == ''){
        alert('Please enter an input to add item in the list.')
    }
    else{
        let list = document.createElement("li");
        list.id = 'item';
        // list.innerHTML = input.value;
        listContainer.appendChild(list);
        list.classList.add('item')
        let editIcon =  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>`;
        let deleteIcon =  `<svg class="svg-modifications" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
        </svg>`;
        let itemText = document.createElement('p');
        let editElement = document.createElement("span");
        let deleteElement = document.createElement("span");
        itemText.innerHTML = input.value;
        editElement.innerHTML = editIcon;
        deleteElement.innerHTML = deleteIcon;
        list.appendChild(itemText);
        list.appendChild(editElement);
        list.appendChild(deleteElement);
        // itemText.add.id = 'ItemTextId'
        editElement.classList.add('editIcon');
        deleteElement.classList.add('deleteIcon');
    // deleteElement.id.add('deleteIcon')

    // document.getElementsByClassName('deleteIcon').addEventListener('click', deleteList());

    // function deleteList(){
    //     // document.getElementsByClassName('deleteIcon').remove();
    //     element = document.getElementsByTagName("span");
    //     for (index = 0; index < element.length; index++) {
    //         element[index].parentNode.r;
    //     }

    // }
    // const box = document.querySelector('.deleteIcon');    
    // // 👇️ set `id` attribute on the element
    // box?.setAttribute('id', 'deleteIcon');

    // document.getElementById('deleteIcon').addEventListener('click', deleteList());
    // function deleteList(){ 
    //     var x = document.querySelectorAll('.deleteIcon');
    //     document.getElementById()
    //     x[0].style.display = "none";
    // }
    } 
    
    input.value = ""; 


}

listContainer.addEventListener("click", function(e){
    if(e.target.closest('.deleteIcon')){
        e.target.closest(".item").remove();
    }
    else if (e.target.closest('.editIcon')){
            // Get the selected list item
            const listText = document.querySelector('p');
          
            // Create an input element
            const inputElement = document.createElement('input');
            inputElement.classList.add('list-input')
            inputElement.value = listText.innerText;
          
            // Replace the list item with the input element
            listText.replaceWith(inputElement);
            // listText.parentNode.replaceChild(inputElement, listText);
            const doneIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>`;
            document.querySelector('.editIcon').innerHTML = doneIcon;
            doneIcon.classList.add('doneIcon')


            doneIcon.addEventListener('click', doneProcess);
            function doneProcess() {
                const newListText = document.createElement('p');
                newListText.innerHTML = inputElement.value;
                // listText.parentNode.replaceChild(newListText, inputElement);
                inputElement.replaceWith(newListText);
            }
          
    }
    else{
        return;
    }
    
}, false)


