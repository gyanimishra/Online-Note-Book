import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'



const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
 let navigate = useNavigate()

 const {showAlert}= props

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://radiant-wildwood-34768.herokuapp.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            showAlert("Login Success","success")
          navigate('/Notes')

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
            <h1 style={{textAlign:"center"}}>Login-For Adding Your Notes</h1>
            <form  onSubmit={handleSubmit}>
                <div className="container  mb-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="container mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
