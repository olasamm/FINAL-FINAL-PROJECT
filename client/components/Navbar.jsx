import React from 'react'
import './Navnar.css';
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark Navabr">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              <a className="nav-link text-light" href="#">About Us</a>
              <a className="nav-link text-light" href="#">Contact Us</a>
              <li className="nav-item dropdown">
                <button className="btn btn-light dropdown-toggle portal mx-5" data-bs-toggle="dropdown" aria-expanded="false">
                  E-portal
                </button>
                <ul className="dropdown-menu dropdown-menu-light border-0">
                  <Link><a className="dropdown-item portal" to="/signup">Lecturer</a></Link>
                 <Link> <a className="dropdown-item portal" to="/signup">Student</a></Link>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar