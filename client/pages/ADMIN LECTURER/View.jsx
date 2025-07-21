import React, { useState } from 'react';
import './ment.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Removed unused imports

import LecturerSidebar from '../../components/LecturerSidebar';
import Navbars from '../../components/Navbars';

const View = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
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
                    <div className="my-4">
                      <Navbars />
                    </div>

                    {/* Assignments */}
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Name: Grace Ajani</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          ID: 000000 | Course: EDP 101 | July 17, 2025 03:28 PM
                        </h6>
                      </div>
                    </div>

                    <div className="g-1">
                      <div className="container mt-5">
                        <div className="card my-5">
                          <div className="card-body">
                            {/* Question 1 */}
                            <div className="row mb-3">
                              <div className="col-md-8">
                                <h6>Question 1</h6>
                                <p>
                                  Exam wants to know if there's a relationship
                                  between students' study time and their exam
                                  scores. He collects data from 30 students...
                                </p>
                                <p>
                                  What statistical method should he use to
                                  analyze the relationship, and why?
                                </p>
                                <img
                                  src="book1.jpg"
                                  alt="Book 1"
                                  className="img-thumbnail mb-2"
                                />
                                <img
                                  src="book2.jpg"
                                  alt="Book 2"
                                  className="img-thumbnail mb-2"
                                />
                              </div>
                              <div className="col-md-4">
                                <div className="text-center">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Grade"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Question 2 */}
                            <div className="row mb-3">
                              <div className="col-md-8">
                                <h6>Question 2</h6>
                                <p>
                                  A friend wants to know if there's a
                                  relationship between students' study time and
                                  their exam scores. He collects data from 30
                                  students...
                                </p>
                                <p>
                                  What statistical method should he use to
                                  analyze the relationship, and why?
                                </p>
                                <img
                                  src="book1.jpg"
                                  alt="Book 1"
                                  className="img-thumbnail mb-2"
                                />
                                <img
                                  src="book2.jpg"
                                  alt="Book 2"
                                  className="img-thumbnail mb-2"
                                />
                              </div>
                              <div className="col-md-4">
                                <div className="text-center">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Grade"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Comment and Total Grade */}
                            <div className="row mb-3">
                              <div className="col-md-8">
                                <label
                                  htmlFor="comment"
                                  className="form-label"
                                >
                                  Comment
                                </label>
                                <textarea
                                  className="form-control"
                                  id="comment"
                                  rows="4"
                                ></textarea>
                              </div>
                              <div className="col-md-4">
                                <label
                                  htmlFor="totalGrade"
                                  className="form-label"
                                >
                                  Total Grade
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="totalGrade"
                                />
                              </div>
                            </div>

                            {/* Buttons */}
                            <div className="d-flex justify-content-end">
                              <button className="btn btn-secondary me-2">
                                Draft
                              </button>
                              <button className="btn btn-primary">Upload</button>
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
  );
};

export default View;