import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const navigate = useNavigate()

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(""); // Add state for error message

    const handleSignup = (e) => {
        e.preventDefault()

        const allValue = {mail, password} 

        console.log(allValue)
        const url = 'https://final-final-project-2.onrender.com/signin/signin'
        axios.post(url, allValue)
        .then((res) => {
          console.log(res)
            navigate('/dashboard')
        })
        .catch((err) => {
          console.error(err);
          setErrorMessage("User does not exist"); // Set error message
        });
    }
  return (
    <>
    
    <div className="container-fluid vh-100">
    <div className="row h-100">
      
      {/* <!-- Left Side: Create Account --> */}
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white text-dark p-5">
        <h3 className="mb-4">Login to the website</h3>

        {/* <!-- Social Icons (using placeholder buttons) --> */}
        <div className="d-flex gap-3 mb-4">
          <button className="btn btn-outline-secondary rounded-circle px-3">IG</button>
          <button className="btn btn-outline-secondary rounded-circle px-3">G</button>
          <button className="btn btn-outline-secondary rounded-circle px-3">GH</button>
        </div>
          <p>or use your email account</p>

        {/* <!-- Form --> */}
        <form className="w-75" method='POST' action={Signin}>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Display error message */}
          <div className="mb-3">
            <input type="email" className="form-control rounded-pill" placeholder="Email" value={mail} onChange={e => setMail(e.target.value)}/> 
          </div>
          <div className="mb-3">
            <input type="password" className="form-control rounded-pill" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="d-grid">
            <button type="submit" onClick={handleSignup} className="btn btn-outline-dark rounded-pill">SIGN UP</button>
          </div>
        </form>
      </div>

      {/* <!-- Right Side: Sign In --> */}
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white bg-primary p-5">
        <h3 className="text-center">Welcome to Website </h3>
        <p className="mt-3">New here</p>
        <button className="btn btn-dark rounded-pill px-4">LOGIN</button>
      </div>

    </div>
  </div>
    
    </>
  )
}

export default Signin