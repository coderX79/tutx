import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBell, FaCalendarAlt, FaPrint, FaInfoCircle } from "react-icons/fa";

const Notices = () => {
  const notices = [
    {
      id: 1,
      title: "Fee Submission Deadline Extension",
      date: "2024-03-25",
      category: "Important",
      content: "The last date for fee submission has been extended to 5th April 2024. Please clear your dues before the deadline.",
      postedBy: "Admin Office"
    },
    {
      id: 2,
      title: "Holiday Announcement",
      date: "2024-03-20",
      category: "Holiday",
      content: "Institute will remain closed from 29th March to 1st April for annual maintenance.",
      postedBy: "Management"
    },
    {
      id: 3,
      title: "New Study Material Available",
      date: "2024-03-18",
      category: "Academic",
      content: "Updated study materials for Class XII Physics are now available in the student portal.",
      postedBy: "Academic Department"
    }
  ];
  
  return (
    <>
      <div className="container py-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <h3 className="mb-0">
            <FaBell className="me-2" />
            Student Notices
          </h3>
        </div>

        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              {notices.map(notice => (
                <div key={notice.id} className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5 className="card-title text-primary">
                          {notice.title}
                        </h5>
                        <div className="d-flex align-items-center text-muted small mb-2">
                          <FaCalendarAlt className="me-2" />
                          {new Date(notice.date).toLocaleDateString()}
                          <span className="badge bg-warning text-dark ms-3">
                            {notice.category}
                          </span>
                        </div>
                      </div>
                      <button className="btn btn-sm btn-outline-secondary">
                        <FaPrint />
                      </button>
                    </div>
                    <p className="card-text">{notice.content}</p>
                    <div className="text-end small text-muted">
                      <FaInfoCircle className="me-2" />
                      Posted by: {notice.postedBy}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Information */}
          <div className="text-center mt-5">
            <div className="alert alert-info d-inline-block">
              <FaInfoCircle className="me-2" />
              Total Notices Published: {notices.length}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Notices;
