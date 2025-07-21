import React, { useState } from 'react';
import './ment.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';



import LecturerSidebar from '../../components/LecturerSidebar';
import Navbars from '../../components/Navbars';

const LecturerAssignment = () => {
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

                   
                    <h5 className="mt-5">Create a New Assignment</h5>
                    <small>Fill in the details below to create an new assignment</small>
                    <div className="mb-3">
        <label className="form-label mt-5">Assignment Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter assignment title"
        />
      </div>


      <div className="mb-3">
        <label className="form-label">Course</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Course Title"
        />
      </div>


      <div className="mb-3">
        <label className="form-label">Instructions</label>
        <textarea
          className="form-control"
          rows="4"
          placeholder="Enter assignment instructions"
        ></textarea>
      </div>


      <div className="row mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <label className="form-label">Due Date</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Due Time</label>
          <input type="time" className="form-control" />
        </div>
      </div>

      {[1, 2, 3].map((num) => (
        <div className="mb-4" key={num}>
          <label className="form-label">Question {num}</label>
          <textarea
            className="form-control mb-2"
            rows="2"
            placeholder="Enter question here"
          ></textarea>
          <div className="d-flex gap-3 small text-secondary">
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
      ))}


      <div className="mb-4">
        <button className="btn btn-primary">Add Questions</button>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary">Save as Draft</button>
        <button className="btn btn-primary">Create Assignment</button>
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

export default LecturerAssignment;