
import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState =(props)=>{
     
    const [notes, setNotes] = useState([])
    ////Getting data from api

    const getNotes= async()=>{

        let res= await fetch("https://radiant-wildwood-34768.herokuapp.com/api/notes/fetchallnotes",{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
              }
        })
        const json = await res.json() 
        setNotes(json)
    }

    //////Post Notes in database or api


    const addNotes= async(title,description,tag)=>{

        let res= await fetch("https://radiant-wildwood-34768.herokuapp.com/api/notes/addnote",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
              },
              body:JSON.stringify({title,description,tag} )
        })
        const note = await res.json();
        setNotes(notes.concat(note))
    }
     


    //////delete notes from database or api



    const deleteNotes= async(id)=>{

        let res= await fetch(`https://radiant-wildwood-34768.herokuapp.com/api/notes/deletenote/${id}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
              },
              
        })
        let JSON = await res.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }


       ///////Edit Notes 
       const editNote = async (id, title, description, tag) => {
        // API Call 
        const res = await fetch(`https://radiant-wildwood-34768.herokuapp.com/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag})
        });
        const json = await res.json(); 
    
         let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if (element._id === id) {
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag; 
            break; 
          }
        }  
        setNotes(newNotes);
      }












    return(

        <NoteContext.Provider value={{notes, addNotes, deleteNotes, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>

    )
}


export default NoteState;