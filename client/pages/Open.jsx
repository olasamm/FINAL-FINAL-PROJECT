import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Open.css';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Navbars from '../components/Navbars';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Open = () => {


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
  <Sidebar />
</div>

  

    

    <div className="col-lg-9 col-md-8 main-content-container">
      <div className="main-content">
        <div className='my-4'>
    <Navbars  />
    </div>





        <div className="g-1">
          
        <div className="container my-4">
     <Link to="/Assignment"><button className="btn mb-3 shadow-sm solid">&larr; Back</button></Link> 

      <div className="mb-4">
        <h4>Advanced Mathematics Assignment #1</h4>
        <div className='d-flex justify-content-between'>
        <p className="text-muted">Sarah Blakely | Statistics 101</p>
        <div>
        <p className="text-primary mx-5">Submitted: March 15, 2025 – 11:59 PM</p>
        </div>
        </div>
      </div>

      <div className="alert alert-light">
        <strong>Instructions:</strong> Complete all questions below. Show your work clearly and provide detailed explanations where necessary. You can upload supporting documents or images if needed.
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5>Question 1</h5>
          <p>A professor wants to know if there's a relationship between students' study time and their exam scores. He collects data from 30 students.</p>
          <p><strong>What statistical method should he use to analyze the relationship, and why?</strong></p>

          <textarea
            className="form-control mb-3 shadow-none"
            rows="4"
            placeholder="Your Answer" 
          ></textarea>

          <div className="mb-3">
          <div className="d-flex gap-4 my-3">


<label className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
  <i className="bi bi-paperclip fs-5"></i>
  <span>Attach Files</span>
  <input type="file" hidden />
</label>


<label className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
  <i className="bi bi-image fs-5"></i>
  <span>Add Image</span>
  <input type="file" accept="image/*" hidden />
</label>

</div>
          </div>

          <div className="d-flex gap-5 flex-wrap">
            
          </div>
        </div>
      </div>




      <div className="card mb-4">
        <div className="card-body">
          <h5>Question 2</h5>
          <p>A professor wants to know if there's a relationship between students' study time and their exam scores. He collects data from 30 students.</p>
          <p><strong>What statistical method should he use to analyze the relationship, and why?</strong></p>

          <textarea
            className="form-control mb-3 shadow-none"
            rows="4"
            placeholder="Your Answer" 
          ></textarea>

          <div className="mb-3">
          <div className="d-flex gap-4 my-3">


<label className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
  <i className="bi bi-paperclip fs-5"></i>
  <span>Attach Files</span>
  <input type="file" hidden />
</label>


<label className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
  <i className="bi bi-image fs-5"></i>
  <span>Add Image</span>
  <input type="file" accept="image/*" hidden />
</label>

</div>
          </div>

          <div className="d-flex gap-5 flex-wrap">
            
          </div>
        </div>
      </div>








      <div className="card mb-4">
        <div className="card-body">
          <h5>Question 3</h5>
          <p>A professor wants to know if there's a relationship between students' study time and their exam scores. He collects data from 30 students.</p>
          <p><strong>What statistical method should he use to analyze the relationship, and why?</strong></p>

          <textarea
            className="form-control mb-3 shadow-none"
            rows="4"
            placeholder="Your Answer" 
          ></textarea>

          <div className="mb-3">
          <div className="d-flex gap-4 my-3">


<label className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
  <i className="bi bi-paperclip fs-5"></i>
  <span>Attach Files</span>
  <input type="file" hidden />
</label>


<label className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
  <i className="bi bi-image fs-5"></i>
  <span>Add Image</span>
  <input type="file" accept="image/*" hidden />
</label>

</div>
          </div>

          <div className="d-flex gap-5 flex-wrap">
            
          </div>
        </div>
      </div>



      {/* {<!-- From Uiverse.io by vinodjangid07 --> } */}
      <center>
        <Link to="/submit">
<button class="button">
   <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
  SUBMIT
</button>
</Link>
</center>










      
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

export default Open