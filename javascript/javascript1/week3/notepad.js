const notes = [];
// Added 3rd parameter for trying out extra idea
//Extra idea = if its an important node adding to begginging of array so it stays at top

function saveNote(content, id, importantNote) {
  const obj = { content, id, importantNote };
  if (importantNote) {
    notes.unshift(obj);
  } else {
    notes.push(obj); // extra idea about sticky note
  }
}
// Function for finding out the note inside the spesified id
function getNote(id) {
  for (i = 1; i < notes.length + 1; i++) {
    if (i === id) {
      return JSON.stringify(notes[i - 1]);
    }
  }
}
saveNote("Pick up groceries", 1, false);
saveNote("Do laundry", 2, false);
saveNote("Supermarket", 3, true); // For trying if sticky notes works
// Function for formatting the render
function logOutNotesFormatted() {
  for (i = 0; i < notes.length; i++) {
    const key1 = notes[i].id;
    const key2 = notes[i].content;
    console.log(
      `The note with id : ${key1}, has following note text : ${key2}`
    );
  }
}

const firstNote = getNote(1);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
logOutNotesFormatted();
