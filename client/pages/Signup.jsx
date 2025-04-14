import  { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'




const Signup = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [mail, setmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = (e) => { 
        e.preventDefault()


        const allValue = {name, mail, password} 

        console.log(allValue)
        const url = 'http://localhost:9000/submit'
        axios.post(url, allValue)
        .then((res) => {
          console.log(res)
            navigate('/signin')
        })
        .catch((err) => {
          console.error(err);
        });
        
        
    }
  return (
    <>
    
    <div className="container-fluid vh-100">
    <div className="row h-100">
      
      {/* <!-- Left Side: Create Account --> */}
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white text-dark p-5">
        <h3 className="mb-4">Create Account</h3>

        {/* <!-- Social Icons (using placeholder buttons) --> */}
        <div className="d-flex gap-3 mb-4">
          <button className="btn btn-outline-secondary rounded-circle px-3">IG</button>
          <button className="btn btn-outline-secondary rounded-circle px-3">G</button>
          <button className="btn btn-outline-secondary rounded-circle px-3">GH</button>
        </div>

        {/* <!-- Form --> */}
        <form className="w-75" method='POST' action={Signup}>
          <div className="mb-3">
            <input type="text" className="form-control rounded-pill" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control rounded-pill" placeholder="Email" value={mail} onChange={e => setmail(e.target.value)}/> 
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
        <h3 className="text-center">Welcome back to<br/>Website</h3>
        <p className="mt-3">Already have an account?</p>
        <Link> <button className="btn btn-dark rounded-pill px-4" to="/signin" >SIGN IN</button> </Link>
      </div>

    </div>
  </div>


    </>
  )
}

export default Signup