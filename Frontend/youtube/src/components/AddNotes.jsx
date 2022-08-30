import React, { useContext } from 'react'
import { useState } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
const AddNotes = (props) => {
    const context= useContext(NoteContext)
    const {addNotes}=context
const [note,Setnote]= useState({title:"",description:"",tag:""})
    const handleChange=(e)=>{
        
        Setnote({...note,[e.target.name]:e.target.value})
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
         addNotes(note.title,note.description,note.tag)
         Setnote({title: "", description: "", tag: ""})
         props.showAlert("Note Added","success")
    }









  return (
    <div className="container my-3">
    <h2>Add a Note</h2>
    <form className="my-3">
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"  minLength={5} required value={note.title} onChange={handleChange} /> 
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea  type="text" rows="8"  className="form-control" id="description" name="description" value={note.description} minLength={5} required onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag"minLength={5}required  value={note.tag}onChange={handleChange} />
        </div>
       
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handlesubmit}>Add Note</button>
    </form>
</div>
  )
}

export default AddNotes
