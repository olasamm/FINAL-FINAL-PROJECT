import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Navbars from '../components/Navbars';
import './Dashboard.css';
import '../pages/Signin'

const Dashboards = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  
  const [currentDateTime, setCurrentDateTime] = useState({
    date: '',
    time: ''
  });

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    console.log('Sidebar visibility:', !isSidebarVisible);
  };



  
  
  return (



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




    
        {/* Welcome */}
        <div className="card welcome-card mb-4">
          <h5>Welcome, username</h5>
          <p>You have 2 incomplete assignments.</p>
        </div>




        {/* Assignments  */}
        <h5 className="mb-3">My Assignments</h5>
        <div className="row g-4">
          
            <div className="col-sm-6 col-md-4 col-lg-3" >
              <div className="card assignment-card">
                <img
                  src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?semt=ais_hybrid&w=740"
                  className="card-img-top"
                  alt="Assignment"
                />
                <div className="card-body">
                  <p className="card-text">
                    Subject <br />
                    <small>Deadline: {currentDateTime.time}, {currentDateTime.date}</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3" >
            <div className="card assignment-card">
              <img
                src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?semt=ais_hybrid&w=740"
                className="card-img-top"
                alt="Assignment"
              />
              <div className="card-body">
                <p className="card-text">
                  Subject <br />
                  <small>Deadline: {currentDateTime.time}, {currentDateTime.date}</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3" >
          <div className="card assignment-card">
            <img
              src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?semt=ais_hybrid&w=740"
              className="card-img-top"
              alt="Assignment"
            />
            <div className="card-body">
              <p className="card-text">
                Subject <br />
                <small>Deadline: {currentDateTime.time}, {currentDateTime.date}</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3" >
          <div className="card assignment-card">
            <img
              src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?semt=ais_hybrid&w=740"
              className="card-img-top"
              alt="Assignment"
            />
            <div className="card-body">
              <p className="card-text">
                Subject <br />
                <small>Deadline: {currentDateTime.time}, {currentDateTime.date}</small>
              </p>
            </div>
          </div>
        </div>
          
        </div>




        {/* Notifications*/}
        <div className="card notifications-card mt-4">
          <h6>Recent Activities/Notifications</h6>
          <ul className="list-unstyled">
            <li>You submitted Mr. Dayo’s assignment <span className="text-muted">5 mins ago</span></li>
            <li>Mr Dayo leaves a feedback on your assignment <span className="text-muted">15 mins ago</span></li>
            <li>Your EDP 101 assignment was rejected <span className="text-muted">1 day ago</span></li>
            <li>Your EDP 101 assignment was accepted <span className="text-muted">4 days ago</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;