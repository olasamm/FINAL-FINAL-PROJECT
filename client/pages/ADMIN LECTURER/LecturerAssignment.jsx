import React, { useState, useEffect } from 'react';
import './ment.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import LecturerSidebar from '../../components/LecturerSidebar';
import Navbars from '../../components/Navbars';

const LecturerAssignment = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    course: '',
    instructions: '',
    dueDate: '',
    dueTime: '',
    questions: [{ text: '', files: [], images: [] }, { text: '', files: [], images: [] }, { text: '', files: [], images: [] }],
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    console.log('Sidebar visibility:', !isSidebarVisible);
  };

  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const updatedQuestions = [...formData.questions];
      updatedQuestions[index] = { ...updatedQuestions[index], text: value };
      setFormData({ ...formData, questions: updatedQuestions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e, index, type) => {
    const files = Array.from(e.target.files).map(file => file.name);
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [type]: files };
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [...formData.questions, { text: '', files: [], images: [] }],
    });
  };

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const hasValidQuestion = formData.questions.some(question => question.text.trim() !== '');
    if (!hasValidQuestion) {
      setMessage('Please provide at least one non-empty question.');
      setMessageType('error');
      return;
    }
    const assignment = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    };
    const existingAssignments = JSON.parse(localStorage.getItem('assignments') || '[]');
    localStorage.setItem('assignments', JSON.stringify([...existingAssignments, assignment]));
    setMessage('Assignment created successfully!');
    setMessageType('success');
    setFormData({
      title: '',
      course: '',
      instructions: '',
      dueDate: '',
      dueTime: '',
      questions: [{ text: '', files: [], images: [] }, { text: '', files: [], images: [] }, { text: '', files: [], images: [] }],
    });
    // Removed automatic navigation to allow the message to be seen
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 30000); // 30 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

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

                    {message && (
                      <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                        {message}
                      </div>
                    )}

                    <h5 className="mt-5">Create a New Assignment</h5>
                    <small>Fill in the details below to create an new assignment</small>
                    <div className="mb-3">
                      <label className="form-label mt-5">Assignment Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter assignment title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Course</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Course Title"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Instructions</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Enter assignment instructions"
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label">Due Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="dueDate"
                          value={formData.dueDate}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Due Time</label>
                        <input
                          type="time"
                          className="form-control"
                          name="dueTime"
                          value={formData.dueTime}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {formData.questions.map((question, index) => (
                      <div className="mb-4" key={index}>
                        <label className="form-label">Question {index + 1}</label>
                        <textarea
                          className="form-control mb-2"
                          rows="2"
                          placeholder="Enter question here"
                          value={question.text}
                          onChange={(e) => handleInputChange(e, index)}
                        ></textarea>
                        <div className="d-flex gap-3 small text-secondary">
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
                    ))}

                    <div className="mb-4">
                      <button className="btn btn-primary" onClick={addQuestion}>
                        Add Questions
                      </button>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary" onClick={() => {
                        setMessage('Draft saved (placeholder)');
                        setMessageType('success');
                      }}>
                        Save as Draft
                      </button>
                      <button className="btn btn-primary" onClick={handleCreateAssignment}>
                        Create Assignment
                      </button>
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