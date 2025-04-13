import React, { useState } from 'react';
import './Sidebar.css';
import {FaTachometerAlt, FaUser, FaTasks, FaFileAlt, FaChartBar, FaUsers, FaBook, FaCog, FaSignOutAlt,  } from "react-icons/fa";

const Sidebar = () => {
   

    return (
         <nav className="sidebar p-3 border-end">
                <h4 className="text-primary">WEBSITE</h4>
                <ul className="nav flex-column">
                  <li className="nav-item"><a href="#" className="nav-link active"><FaTachometerAlt className="me-2" />Dashboard</a></li>
                  <li className="nav-item"><a href="#" className="nav-link"><FaUser className="me-2" />My Profile</a></li>
                  <li className="nav-item"><a href="#" className="nav-link"><FaTasks className="me-2" />My Assignments</a></li>
                  <li className="nav-item"><a href="#" className="nav-link"><FaFileAlt className="me-2" />My Submissions</a></li>
                  <li className="nav-item"><a href="#" className="nav-link"><FaChartBar className="me-2" />My Performance</a></li>
                  <li className="nav-item"><a href="#" className="nav-link"><FaUsers className="me-2" />Collaborations</a></li>
                  <li className="nav-item"><a href="#" className="nav-link"><FaBook className="me-2" />Resources</a></li>
                  <li className="nav-item"><a href="#" className="nav-link"><FaCog className="me-2" />Settings</a></li>
                  <li className="nav-item mt-auto"><a href="#" className="nav-link text-danger"><FaSignOutAlt className="me-2" />Log out</a></li>
                </ul>
              </nav>
    );
};

export default Sidebar;
