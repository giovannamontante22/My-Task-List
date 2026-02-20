const input = document.getElementById('taskInput');
const button = document.getElementById('button');
const list = document.getElementById('taskList');

function addTask() {
    const taskText = input.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', () => {
            list.removeChild(li);
        });

        list.appendChild(li);
        input.value = '';
    }
}


button.addEventListener('click', addTask);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') addTask();
});


const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    list.innerHTML = '';
});




const noteTextarea = document.getElementById('note');
const saveBtn = document.getElementById('save_notes');
const notesList = document.getElementById('notesList');

let savedNotes = [];



function addNoteToList(note) {
    const li = document.createElement('li');
    li.textContent = note;
    notesList.appendChild(li);
}



saveBtn.addEventListener('click', () => {
    const noteContent = noteTextarea.value.trim();
    if (noteContent === '') return; 

   
    savedNotes.push(noteContent);
    addNoteToList(noteContent);
    noteTextarea.value = '';

});