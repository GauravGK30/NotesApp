function addNote(){
    const title = document.getElementById("title").value.trim();
    const content =document.getElementById("content").value.trim();

    if(!title || !content){
        alert("Please fill in both title and content");
        return;
    }


    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    notes.push({title,content});
    localStorage.setItem("notes",JSON.stringify(notes));

    document.getElementById("title").value="";
    document.getElementById("content").value="";
    displayNotes();
}


function displayNotes(){
    const notes= JSON.parse(localStorage.getItem("notes")|| "[]");
    const notesContainer = document.getElementById("notes");
    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className= "note";
        noteDiv.innerHTML =`
        <h3>${note.title}</h3>
        <p>${note.content}</p>
      <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
        `;
        notesContainer.appendChild(noteDiv);
    });
}

function deleteNote(index){
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notes));
    displayNotes();
}

window.onload = displayNotes
