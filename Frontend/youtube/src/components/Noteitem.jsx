import React, { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
import './Home.css'
const Noteitem = (props) => {
    const { item,updateNote } = props;
    const context= useContext(NoteContext)
    const {deleteNotes}=context
  return (
    <div className=" container col-md-6">
    <div className="card my-3 mx-2 ">
        <div className="container card-body" id='abc'>
            <div className=" d-flex align-items-center " >
                <h4 className="card-title">{item.title}</h4>
                <i className="far fa-trash-alt mx-3" style={{color:"red"}}onClick={()=>{deleteNotes(item._id);props.showAlert("Deleted Successfully","success")}}></i>
                <i className="far fa-edit mx-3"style={{color:"blue"}} onClick={()=>{updateNote(item);props.showAlert("Updated Successfully","success")}}></i>
            </div>
            <p className="card-text">{item.description}</p>
            <h6 className="card-text" style={{color:"green"}}>{item.tag}</h6>

        </div>
    </div>
</div>
  )
}

export default Noteitem
