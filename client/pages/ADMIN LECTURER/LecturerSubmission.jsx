import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import LecturerSidebar from '../../components/LecturerSidebar';
import Navbars from '../../components/Navbars';
import './ment.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LecturerSubmission = () => {
  const { id } = useParams(); // Get assignment ID from URL
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    console.log('Sidebar visibility:', !isSidebarVisible);
  };

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions') || '{}');
    console.log('Assignment ID:', id);
    console.log('Stored Submissions:', storedSubmissions);
    console.log('Submissions for this assignment:', storedSubmissions[id]);
    setSubmissions(storedSubmissions[id] || []);
  }, [id]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 30000); // 30 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleGrade = (submissionIndex, grade) => {
    if (grade < 0 || grade > 100) {
      setMessage('Grade must be between 0 and 100.');
      setMessageType('danger');
      return;
    }
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions') || '{}');
    storedSubmissions[id][submissionIndex].grade = parseInt(grade);
    localStorage.setItem('submissions', JSON.stringify(storedSubmissions));
    setSubmissions([...storedSubmissions[id]]);
    setMessage(`Submission graded successfully!`);
    setMessageType('success');
  };

  const handleStatus = (submissionIndex, status) => {
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions') || '{}');
    storedSubmissions[id][submissionIndex].status = status;
    localStorage.setItem('submissions', JSON.stringify(storedSubmissions));
    setSubmissions([...storedSubmissions[id]]);
    setMessage(`Submission ${status}!`);
    setMessageType('success');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <button
          className="btn btn-primary d-lg-none mb-2"
          onClick={toggleSidebar}
        >
          <FaBars /> Menu
        </button>

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

            {message && (
              <div className={`alert alert-${messageType} mb-4`} role="alert">
                {message}
              </div>
            )}

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
                    <li><a className="dropdown-item" href="#">All</a></li>
                    <li><a className="dropdown-item" href="#">Pending</a></li>
                    <li><a className="dropdown-item" href="#">Accepted</a></li>
                    <li><a className="dropdown-item" href="#">Rejected</a></li>
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

            <h5 className="my-5">Submissions</h5>

            <div className="container py-4">
              {submissions.length === 0 ? (
                <div className="alert alert-info">No submissions yet.</div>
              ) : (
                submissions.map((submission, index) => (
                  <div className="card mb-3 shadow-sm border-0 rounded" key={index}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
        <p className="mb-1"><strong>Name:</strong> {submission.studentName}</p>
        <p className="mb-0"><strong>ID:</strong> {submission.studentId}</p>
        <p className="mb-0"><strong>Email:</strong> {submission.email}</p>
        <p className="mb-0"><strong>Status:</strong> {submission.status}</p>
        <p className="mb-0"><strong>Grade:</strong> {submission.grade || 'Not graded'}</p>
                      </div>
                      <div className="text-end">
                        <p className="mb-2 text-muted">
                          {new Date(submission.submittedAt).toLocaleString()}
                        </p>
                        <div className="d-flex gap-2 justify-content-end align-items-center">
                          <Link to={`/lecturer-view/${id}/${index}`}>
                            <button className="btn btn-sm btn-primary">View</button>
                          </Link>
                          <input
                            type="number"
                            className="form-control d-inline-block"
                            style={{ width: '100px' }}
                            placeholder="Grade (0-100)"
                            onChange={(e) => handleGrade(index, e.target.value)}
                            disabled={submission.grade !== null}
                          />
                          <button
                            className="btn btn-sm btn-success"
                            onClick={() => handleStatus(index, 'accepted')}
                            disabled={submission.status !== 'pending'}
                          >
                            Accept
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleStatus(index, 'rejected')}
                            disabled={submission.status !== 'pending'}
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerSubmission;