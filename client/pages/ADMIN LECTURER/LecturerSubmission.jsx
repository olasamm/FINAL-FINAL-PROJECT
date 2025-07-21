import React, { useState } from 'react'
import './ment.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import { FaUser } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import LecturerSidebar from '../../components/LecturerSidebar';
import Navbars from '../../components/Navbars';


const LecturerSubmission = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
        
       
        const toggleSidebar = () => {
          setIsSidebarVisible(!isSidebarVisible);
          console.log('Sidebar visibility:', !isSidebarVisible);
        };
  return (
    <>
       <div>
         <div className="container-fluid">
           <div className="row">
             
             <button
               className="btn btn-primary d-lg-none mb-2"
               onClick={toggleSidebar}
             >
               <FaBars /> Menu
             </button>
   
             <div className="container-fluid">
     <div className="row">
   
       
   
   
       {/* Sidebar */}
         
       <div
     className={`col-lg-3 col-md-4 sidebar-container ${
       isSidebarVisible ? 'd-block' : 'd-none d-lg-block'
     }`}
   >
     <LecturerSidebar />
   </div>
   
     
   
       
       <div className="col-lg-9 col-md-8 main-content-container">
         <div className="main-content">
           <div className='my-4'>
       <Navbars  />
       </div>
   
   
   
   
       
       <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-light">
        
        <div className='filter-container g-4'> 
         <div className="dropdown">
           <button
             className=" dropdown-toggle shadow-sm"
             type="button"
             id="filterDropdown"
             data-bs-toggle="dropdown"
             aria-expanded="false"
           >
             Filter
           </button>
           <ul className="dropdown-menu" aria-labelledby="filterDropdown">
             <li><a className="dropdown-item" href="#">Option 1</a></li>
             <li><a className="dropdown-item" href="#">Option 2</a></li>
           </ul>
         </div>
         </div>
   
         
     <div className="input-group shadow-sm">
       <input
         type="text"
         className="form-control"
         placeholder="Search Here...."
         aria-label="Search"
       />
       <span className="input-group-text bg-white border-start-0">
         <i className="bi bi-search"></i>
       </span>
     </div>
   </div>
   
           <h5 className="my-5">Submission</h5>
   
   
   
           <div className="g-1">
             
           <div className="container py-4">
      <div className="card mb-3 shadow-sm border-0 rounded">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="mb-1"><strong>Name:</strong> Grace Ajani</p>
            <p className="mb-0"><strong>ID:</strong> 000000</p>
          </div>

          <div className="text-end">
            <p className="mb-2 text-muted">January 10, 2025 11:34 PM</p>
            <div className="d-flex gap-2 justify-content-end">
             <Link to="/lecturer-view"> <button className="btn btn-sm btn-primary">View</button></Link>
              <button className="btn btn-sm btn-success">Accept</button>
              <button className="btn btn-sm btn-danger">Reject</button>
            </div>
          </div>
        </div>
      </div>


      <div className="card mb-3 shadow-sm border-0 rounded">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="mb-1"><strong>Name:</strong> Grace Ajani</p>
            <p className="mb-0"><strong>ID:</strong> 000000</p>
          </div>
          <div className="text-end">
            <p className="mb-2 text-muted">January 10, 2025 11:34 PM</p>
            <div className="d-flex gap-2 justify-content-end">
            <Link to="/lecturer-view"> <button className="btn btn-sm btn-primary">View</button></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 shadow-sm border-0 rounded">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="mb-1"><strong>Name:</strong> Grace Ajani</p>
            <p className="mb-0"><strong>ID:</strong> 000000</p>
          </div>
          <div className="text-end">
            <p className="mb-2 text-muted">January 10, 2025 11:34 PM</p>
            <div className="d-flex gap-2 justify-content-end">
            <Link to="/lecturer-view"> <button className="btn btn-sm btn-primary">View</button></Link>
              <button className="btn btn-sm btn-success">Accept</button>
              <button className="btn btn-sm btn-danger">Reject</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 shadow-sm border-0 rounded">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="mb-1"><strong>Name:</strong> Grace Ajani</p>
            <p className="mb-0"><strong>ID:</strong> 000000</p>
          </div>
          <div className="text-end">
            <p className="mb-2 text-muted">January 10, 2025 11:34 PM</p>
            <div className="d-flex gap-2 justify-content-end">
              <button className="btn btn-sm btn-primary">View</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 shadow-sm border-0 rounded">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="mb-1"><strong>Name:</strong> Grace Ajani</p>
            <p className="mb-0"><strong>ID:</strong> 000000</p>
          </div>
          <div className="text-end">
            <p className="mb-2 text-muted">January 10, 2025 11:34 PM</p>
            <div className="d-flex gap-2 justify-content-end">
            <Link to="/lecturer-view"> <button className="btn btn-sm btn-primary">View</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
             
           </div>
   
   
   
   
          
         </div>
       </div>
     </div>
   </div>
           </div>
         </div>
       </div>
       
       </>
  )
}

export default LecturerSubmission