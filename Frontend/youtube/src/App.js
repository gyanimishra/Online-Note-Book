
import './App.css';
import {Routes,Route} from 'react-router-dom'
import NoteState from './Context/Notes/NoteState';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Notes from './components/Notes';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [Ale ,setAle]= useState(null)
  const showAlert=(message,type)=>{
    setAle({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAle(null)
    },1500)

 }
  return (
    <div className="App">
      <NoteState>
      <Navbar/>
      <Alert Ale={Ale}/>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/Notes'  element={<Notes showAlert={showAlert}/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/login'  element={<Login showAlert={showAlert}/>}/>
        <Route path='/signup'  element={<SignUp showAlert={showAlert}/>}/>
       

      </Routes>
      </NoteState>
    </div>
  );
}

export default App;
