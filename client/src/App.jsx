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
import LecturerSignup from '../pages/ADMIN LECTURER/lecturerSignup'
import LecturerSignin from '../pages/ADMIN LECTURER/LecturerSignin'
import LecturerDashboard from '../pages/ADMIN LECTURER/LecturerDashboard'
import LecturerAssignment from '../pages/ADMIN LECTURER/LecturerAssignment'
import LecturerSubmission from '../pages/ADMIN LECTURER/LecturerSubmission'
import View from '../pages/ADMIN LECTURER/View'
import Setting from '../pages/ADMIN LECTURER/Setting'
import Logout from '../pages/ADMIN LECTURER/Logout'
import Error404 from '../pages/ADMIN LECTURER/Error404'

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
        { <Route path="/lecturerSignup" element={< LecturerSignup/>} /> }
        { <Route path="/lecturerSignin" element={< LecturerSignin/>} /> }
        { <Route path="/lecturerDashboard" element={< LecturerDashboard/>} /> }
        { <Route path="/assignments" element={< LecturerAssignment/>} /> }
        { <Route path="/submissions" element={< LecturerSubmission/>} /> }
        { <Route path="/view" element={< View/>} /> }
        { <Route path="/settings" element={< Setting/>} /> }
        { <Route path="/logout" element={< Logout/>} /> }
        { <Route path="*" element={< Error404/>} /> }
      </Routes>


      </div>

      
    </>
  )
}

export default App
