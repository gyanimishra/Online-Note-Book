import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {



    const [credentials, setCredentials] = useState({name:"",email: "", password: ""}) 
    let navigate = useNavigate()
    const {showAlert}= props
       const handleSubmit = async (e) => {
           e.preventDefault();
           const {name,email,password}= credentials
           const response = await fetch("https://radiant-wildwood-34768.herokuapp.com/api/auth/createuser", {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({name,email,password})
           });
           const json = await response.json()
           console.log(json);
           if (json.success){
               // Save the auth token and redirect
               localStorage.setItem('token', json.authtoken); 
               showAlert("Account created Successfully","success")
             navigate('/login')
   
           }
           else{
               showAlert("Invalid credentials","danger");
           }
       }
   
       const onChange = (e)=>{
           setCredentials({...credentials, [e.target.name]: e.target.value})
       }











  return (
    <div className='container mt-1'>
   <h1 style={{textAlign:"center"}}>Create Account for Using I-NoteBook</h1>

   <form onSubmit={handleSubmit}>
   <div className="container mb-2">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" minLength={5} required/>
    
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="container mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp"onChange={onChange}minLength={5} required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className=" container mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password'onChange={onChange}minLength={5} required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>

</form>


      
    </div>
    
  )
}

export default SignUp
