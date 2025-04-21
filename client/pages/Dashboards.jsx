import React, { useEffect, useState } from 'react'
import { FaUser, FaTasks, FaFileAlt, FaChartBar, FaUsers, FaBook, FaCog, FaSignOutAlt,  } from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import Navbars from '../components/Navbars';

const Dashboards = () => {
  const [name, setName] = useState("")

  const [currentDateTime, setCurrentDateTime] = useState({
    date: '',
    time: ''
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      const date = now.toLocaleDateString(undefined, options);
      const time = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
      setCurrentDateTime({ date, time });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


  useEffect(() => { 
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId')
      if (!userId) return; 

      try {
        const res = await axios.get(`http://localhost:5000/user/${userId}`)
        name(res.data.name)
      } catch (error) {
        res.status(500).json({ message: 'Error fetching user data', error });
      }
    }
  })




  return (
      <div>
          <Navbars />
          <div className="container-fluid">
              <div className="row">
                  {/* Sidebar */}
                  <div className="col-lg-3 col-md-4 d-none d-md-block">
                      <Sidebar />
                  </div>

                  {/* Main Content */}
                  <div className="col-lg-9 col-md-8">
                      <div className="main-content p-4">
                        <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <p className="mb-0">{currentDateTime.date}</p>
              <p className="mb-0">{currentDateTime.time}</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src="https://i.pravatar.cc/40?u=samsam" className="rounded-circle" alt="User" />
              <span>{'samsam'}</span>
            </div>
          </div>
            </div>
          {/* Welcome Card */}
          <div className="card bg-primary text-white p-4 mb-4">
            <div className="row">
              <div className="col-md-10">
                <h5>Welcome, username</h5>
                <p>You have 2 uncomplete assignments. You have 2 uncomplete assignments. You have 2 uncomplete assignments</p>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center">
                <img src="https://via.placeholder.com/80" alt="Illustration" className="img-fluid" />
              </div>
            </div>
          </div>
          


          {/* My Assignments */}
          <h5 className="mb-3">My Assignments</h5>
          <div className="row g-3 mb-4">
            {[1, 2, 3, 4].map((_, idx) => (
              <div className="col-sm-6 col-md-3" key={idx}>
                <div className="card h-100">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Assignment" />
                  <div className="card-body">
                    <p className="card-text mb-2">Subject<br /><small>Deadline: date and time</small></p>
                    <div className="d-flex align-items-center">
                      <img src="https://via.placeholder.com/30" className="rounded-circle me-2" alt="Teacher" />
                      <small>Teacher's name</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <a href="#" className="text-decoration-none">View all</a>
          </div>

          {/* Notifications */}
          <div className="card p-3">
            <h6 className="mb-3">Recent Activities/Notifications</h6>
            <ul className="list-unstyled">
              <li className="mb-1">You submitted Mr. Dayo’s assignment <span className="text-muted">5 mins ago</span></li>
              <li className="mb-1">Mr Dayo leaves a feedback on your assignment <span className="text-muted">15 mins ago</span></li>
              <li className="mb-1">Your EDP 101 assignment was rejected <span className="text-muted">1 day ago</span></li>
              <li>Your EDP 101 assignment was accepted <span className="text-muted">4 days ago</span></li>
            </ul>
          </div>
                          </div>
                      </div>
                  </div>
                  </div>

  );
};

export default Dashboards;

