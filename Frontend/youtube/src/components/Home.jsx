
import {useNavigate} from "react-router-dom"
import './Home.css'
const Home = () => {
  
const navigate= useNavigate()
  const handleclick=()=>{
     navigate("/Notes")
  }
  return (
    <div className='container'>
  
  <div id='Homeimg' onClick={handleclick}>
    <img src="https://media.slidesgo.com/storage/22534189/online-notebook1655995364.jpg" alt="" />
  </div>
       {/* <Notes/> */}
       
      
    </div>
  )
}

export default Home
