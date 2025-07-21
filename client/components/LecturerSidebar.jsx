import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import {FaTachometerAlt, FaUser, FaTasks, FaFileAlt, FaChartBar, FaUsers, FaBook, FaCog, FaSignOutAlt,  } from "react-icons/fa";


const LecturerSidebar = () => {
  return (
    <nav className="sidebar p-3 border-end sidebar-content">
                <h4 className="text-primary">WEBSITE</h4>
                <ul className="nav flex-column">
                  <li className="nav-item"><a href="#" className="nav-link active"><FaTachometerAlt className="me-2" />Dashboard</a></li>
                  <li className="nav-item"><Link to="/settings" className="nav-link"><FaTasks className="me-2" />My profile</Link></li>
                  <li className="nav-item"><Link to="/assignments" className="nav-link"><FaTasks className="me-2" />My Assignments</Link></li>
                  <li className="nav-item"><Link to="/submissions" className="nav-link"><FaTasks className="me-2" />My Submission</Link></li>
                  <li className="nav-item"><a href="#" className="nav-link"><FaChartBar className="me-2" />My Performance</a></li>
                  <li className="nav-item"><a href="#" className="nav-link"><FaBook className="me-2" />Resources</a></li>
                  <li className="nav-item"><Link to="/settings" className="nav-link"><FaTasks className="me-2" />Settings</Link></li>
                  <li className="nav-item"><Link to="/logout" className="nav-link"><FaTasks className="me-2" />logout</Link></li>
                </ul>
              </nav>
  )
}

export default LecturerSidebar