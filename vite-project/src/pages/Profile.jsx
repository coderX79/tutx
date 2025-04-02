// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Profile = () => {

  const [student, setStudent] = useState({
    photo: '',
    firstName: 'John',
    middleName: 'Michael',
    lastName: 'Doe',
    contact: '+1 (555) 123-4567',
    email: 'john.doe@school.edu',
    standard: 10,
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English']
  });

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Simulate API call
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        // Replace with actual API endpoint
        // const response = await axios.get('/api/students/123');
        // setStudent(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load student data');
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with actual API endpoint
      // await axios.put('/api/students/123', student);
      setEditMode(false);
      alert('Profile updated successfully!');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger mt-5 mx-auto" style={{ maxWidth: '600px' }}>
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Student Profile</h3>
                <button
                  className="btn btn-light"
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? "Cancel" : "Edit Profile"}
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="row mb-4">
                    <div className="col-md-4 text-center">
                      <img
                        src={student.photo || "https://via.placeholder.com/150"}
                        alt="Student"
                        className="img-thumbnail rounded-circle mb-3"
                        style={{ width: "150px", height: "150px" }}
                      />
                      {editMode && (
                        <input
                          type="file"
                          className="form-control"
                          onChange={(e) =>
                            setStudent((prev) => ({
                              ...prev,
                              photo: URL.createObjectURL(e.target.files[0]),
                            }))
                          }
                        />
                      )}
                    </div>

                    <div className="col-md-8">
                      <div className="row g-3">
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="firstName"
                            value={student.firstName}
                            onChange={handleInputChange}
                            readOnly={!editMode}
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="middleName"
                            value={student.middleName}
                            onChange={handleInputChange}
                            readOnly={!editMode}
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            name="lastName"
                            value={student.lastName}
                            onChange={handleInputChange}
                            readOnly={!editMode}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="input-group mb-3">
                        <span className="input-group-text bg-info text-white">
                          <i className="fas fa-phone"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="contact"
                          value={student.contact}
                          onChange={handleInputChange}
                          readOnly={!editMode}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-group mb-3">
                        <span className="input-group-text bg-success text-white">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          value={student.email}
                          onChange={handleInputChange}
                          readOnly={!editMode}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="input-group mb-3">
                        <span className="input-group-text bg-warning text-dark">
                          <i className="fas fa-graduation-cap"></i>
                        </span>
                        <span  className='form-select form-select-lg'>9th Standard</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-muted mb-3">
                      <i className="fas fa-book-open me-2"></i>
                      Enrolled Subjects
                    </h5>
                    <div className="list-group">
                      {student.subjects.map((subject, index) => (
                        <div
                          key={index}
                          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        >
                          {subject}
                          <span className="badge bg-primary rounded-pill">
                            <i className="fas fa-check"></i>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {editMode && (
                    <div className="d-grid gap-2 mt-4">
                      <button type="submit" className="btn btn-success btn-lg">
                        Save Changes
                      </button>
                    </div>
                  )}
                </div>
              </form>

              <div className="card-footer bg-light">
                <small className="text-muted">
                  Last updated: {new Date().toLocaleDateString()}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Profile;
