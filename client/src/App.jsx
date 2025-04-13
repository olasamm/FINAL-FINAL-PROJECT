import { useState } from 'react'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Submit from '../components/Submit'
import Welcome from '../components/Welcome'
import Students from '../components/Students'
import Lecturer from '../components/Lecturer'
import Card from '../components/Card'
import Review from '../components/Review'
import Footer from '../components/Footer'
import Signup from '../pages/Signup'
import LandingPage from '../pages/LandingPage'
import Signin from '../pages/Signin'
import Dashboards from '../pages/Dashboards'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <div class="z-index">
      
    {/* <Navbar /> */}
      <Routes>
        { <Route path="/" element={< LandingPage />} /> }
        { <Route path="/signup" element={< Signup />} /> }
        { <Route path="/signin" element={< Signin />} /> }
        { <Route path="/dashboard" element={< Dashboards />} /> } {/* Add this route */}
      </Routes>


      </div>

      
    </>
  )
}

export default App
