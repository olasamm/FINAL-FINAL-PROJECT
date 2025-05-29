import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from '../pages/Signup'
import LandingPage from '../pages/LandingPage'
import Signin from '../pages/Signin'
import Dashboards from '../pages/Dashboards'
import Assignment from '../pages/Assignment'
import Open from '../pages/Open'
import Submit from '../pages/Submit'
import Submission from '../pages/Submission'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <div class="z-index">
      
    {/* <Navbar /> */}
      <Routes>
        { <Route path="/" element={< LandingPage />} /> }
        { <Route path="/signup" element={< Signup />} /> }
        { <Route path="/Signin" element={< Signin />} /> }
        { <Route path="/dashboard" element={< Dashboards />} /> } 
        { <Route path="/assignment" element={< Assignment/>} /> } 
        { <Route path="/open" element={< Open/>} /> } 
        { <Route path="/submit" element={< Submit/>} /> }
        { <Route path="/submission" element={< Submission/>} /> }
      </Routes>


      </div>

      
    </>
  )
}

export default App
