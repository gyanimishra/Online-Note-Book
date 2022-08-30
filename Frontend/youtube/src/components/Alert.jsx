import React from 'react'

const Alert = (props) => {
    const capitalize = (word)=>{
        if(word==="danger")
        {
            word="error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
         <div style={{height: '50px'}}>
        {props.Ale && <div className={`alert alert-${props.Ale.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.Ale.type)}</strong>: {props.Ale.message} 
        </div>}
        </div>
      
    </div>
  )
}

export default Alert