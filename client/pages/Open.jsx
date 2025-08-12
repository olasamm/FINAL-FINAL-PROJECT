import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Open.css';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Navbars from '../components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Open = () => {
  const { id } = useParams();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [assignment, setAssignment] = useState(null);
  const [answers, setAnswers] = useState({});
  const [files, setFiles] = useState({});
  const [images, setImages] = useState({});
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('Not submitted');

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    console.log('Sidebar visibility:', !isSidebarVisible);
  };

  useEffect(() => {
    const storedAssignments = JSON.parse(localStorage.getItem('assignments') || '[]');
    const foundAssignment = storedAssignments.find((a) => a.id === parseInt(id));
    setAssignment(foundAssignment);
    if (foundAssignment) {
      const initialAnswers = {};
      const initialFiles = {};
      const initialImages = {};
      foundAssignment.questions.forEach((_, index) => {
        initialAnswers[index] = '';
        initialFiles[index] = [];
        initialImages[index] = [];
      });
      setAnswers(initialAnswers);
      setFiles(initialFiles);
      setImages(initialImages);
    }
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions') || '{}');
    if (storedSubmissions[id]) {
      setSubmissionStatus(`Submitted: ${new Date(storedSubmissions[id].submittedAt).toLocaleString()}`);
    }
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

  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleFileChange = (e, index, type) => {
    const fileList = Array.from(e.target.files).map(file => file.name);
    if (type === 'files') {
      setFiles({ ...files, [index]: fileList });
    } else {
      setImages({ ...images, [index]: fileList });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasValidAnswer = Object.values(answers).some((answer) => answer && answer.trim() !== '');
    if (!hasValidAnswer) {
      setMessage('Please provide at least one non-empty answer.');
      setMessageType('error');
      return;
    }
    const submission = {
      assignmentId: id,
      answers,
      files,
      images,
      submittedAt: new Date().toISOString(),
    };
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions') || '{}');
    storedSubmissions[id] = submission;
    localStorage.setItem('submissions', JSON.stringify(storedSubmissions));
    setMessage('Answers submitted successfully!');
    setMessageType('success');
    setSubmissionStatus(`Submitted: ${new Date().toLocaleString()}`);
    setAnswers(Object.keys(answers).reduce((acc, key) => ({ ...acc, [key]: '' }), {}));
    setFiles(Object.keys(files).reduce((acc, key) => ({ ...acc, [key]: [] }), {}));
    setImages(Object.keys(images).reduce((acc, key) => ({ ...acc, [key]: [] }), {}));
  };

  if (!assignment) {
    return <div>Loading...</div>;
  }

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

                    {message && (
                      <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                        {message}
                      </div>
                    )}

                    <div className="g-1">
                      <div className="container my-4">
                        <Link to="/assignment">
                          <button className="btn mb-3 shadow-sm solid">&larr; Back</button>
                        </Link>

                        <div className="mb-4">
                          <h4>{assignment.title}</h4>
                          <div className="d-flex justify-content-between">
                            <p className="text-muted">Lecturer | {assignment.course}</p>
                            <div>
                              <p className="text-primary mx-5">{submissionStatus}</p>
                            </div>
                          </div>
                        </div>

                        <div className="alert alert-light">
                          <strong>Instructions:</strong> {assignment.instructions}
                        </div>

                        {assignment.questions.map((question, index) => (
                          <div className="card mb-4" key={index}>
                            <div className="card-body">
                              <h5>Question {index + 1}</h5>
                              <h5>{question.text}</h5>
                              {question.files.length > 0 && (
                                <p><strong>Attached Files:</strong> {question.files.join(', ')}</p>
                              )}
                              {question.images.length > 0 && (
                                <p><strong>Attached Images:</strong> {question.images.join(', ')}</p>
                              )}

                              <textarea
                                className="form-control mb-3 shadow-none"
                                rows="4"
                                placeholder="Your Answer"
                                value={answers[index] || ''}
                                onChange={(e) => handleAnswerChange(index, e.target.value)}
                              ></textarea>

                              <div className="mb-3">
                                <div className="d-flex gap-4 my-3">
                                  <label className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
                                    <i className="bi bi-paperclip fs-5"></i>
                                    <span>Attach Files</span>
                                    <input
                                      type="file"
                                      hidden
                                      onChange={(e) => handleFileChange(e, index, 'files')}
                                      multiple
                                    />
                                  </label>

                                  <label className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
                                    <i className="bi bi-image fs-5"></i>
                                    <span>Add Image</span>
                                    <input
                                      type="file"
                                      accept="image/*"
                                      hidden
                                      onChange={(e) => handleFileChange(e, index, 'images')}
                                      multiple
                                    />
                                  </label>
                                </div>
                              </div>

                              <div className="d-flex gap-5 flex-wrap"></div>
                            </div>
                          </div>
                        ))}

                        <center>
                          <button className="button" onClick={handleSubmit}>
                            <svg
                              className="svgIcon"
                              viewBox="0 0 512 512"
                              height="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                            </svg>
                            SUBMIT
                          </button>
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
  );
};

export default Open;