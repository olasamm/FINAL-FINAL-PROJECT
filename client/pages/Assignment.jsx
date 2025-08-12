import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaBookReader } from 'react-icons/fa';
import './Assignment.css';
import Sidebar from '../components/Sidebar';
import Navbars from '../components/Navbars';

const Assignment = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [assignments, setAssignments] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    console.log('Sidebar visibility:', !isSidebarVisible);
  };

  useEffect(() => {
    const storedAssignments = JSON.parse(localStorage.getItem('assignments') || '[]');
    setAssignments(storedAssignments);
  }, []);

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
                <div
                  className={`col-lg-3 col-md-4 sidebar-container ${
                    isSidebarVisible ? 'd-block' : 'd-none d-lg-block'
                  }`}
                >
                  <Sidebar />
                </div>

                <div className="col-lg-9 col-md-8 main-content-container">
                  <div className="main-content">
                    <div className="my-4">
                      <Navbars />
                    </div>

                    <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-light">
                      <div className="filter-container g-4">
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle shadow-sm"
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

                    <h5 className="my-5">My Assignments</h5>

                    <div className="g-1">
                      {assignments.map((assignment) => (
                        <div className="card mb-3 ass-card border-0 shadow-sm" key={assignment.id}>
                          <div className="card-body d-flex justify-content-between align-items-center">
                            <div>
                              <h5 className="fw-bold">{assignment.title}</h5>
                              <div className="d-flex text-muted">
                                <span className="me-4">
                                  <i className="bi bi-person-fill me-2"></i>Lecturer
                                </span>
                                <span>
                                  <i className="bi bi-book-fill me-2"></i>{assignment.course}
                                </span>
                              </div>
                            </div>
                            <div className="text-end">
                              <p className="mb-2">{assignment.dueDate}</p>
                              <Link to={`/open/${assignment.id}`}>
                                <button className="btn btn-primary btn-sm">Open</button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignment;