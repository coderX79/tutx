import React from 'react';
import { Bell, BookOpen, ClipboardList, Calendar, BarChart2, Award } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  // Data
  const courses = [
    { name: "Maths", progress: 65 },
    { name: "History", progress: 40 },
    { name: "Science", progress: 20 }
  ];

  const events = [
    { title: "Assignment due", date: "April 10", type: "assignment" },
    { title: "Live Webinar", date: "April 12", type: "webinar" },
    { title: "Mock Test", date: "April 15", type: "exam" }
  ];

  const exams = [
    { subject: "Maths", score: 85, total: 100, color: "#3b82f6" },
    { subject: "Physics", score: 78, total: 100, color: "#f59e0b" },
    { subject: "Computer Science", score: 92, total: 100, color: "#10b981" }
  ];

  const stats = [
    { label: "Courses Enrolled", value: 12, bgColor: "#dbeafe", color: "#1d4ed8" },
    { label: "Completed", value: 5, bgColor: "#d1fae5", color: "#059669" },
    { label: "In Progress", value: 4, bgColor: "#fef3c7", color: "#d97706" },
    { label: "Certificates", value: 3, bgColor: "#ede9fe", color: "#7c3aed" }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Welcome back! Here's what's happening today.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ position: 'relative' }}>
            <Bell className="card-icon" />
            <span className="notification-badge">3</span>
          </div>
          <div className="user-avatar">JD</div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Enrolled Courses Card */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Enrolled Courses</h2>
            <BookOpen className="card-icon icon-blue" />
          </div>
          <div>
            {courses.map((course, index) => (
              <div key={index} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>{course.name}</span>
                  <span style={{ fontSize: '14px', color: '#64748b' }}>{course.progress}%</span>
                </div>
                <div className="progress-container">
                  <div 
                    className="progress-bar"
                    style={{ 
                      width: `${course.progress}%`,
                      backgroundColor: '#3b82f6'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="view-all-btn">
            View all courses →
          </button>
        </div>

        {/* Upcoming Events Card */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Upcoming Events</h2>
            <Calendar className="card-icon icon-yellow" />
          </div>
          <div>
            {events.map((event, index) => (
              <div key={index} className="event-item">
                <div className={`event-icon ${
                  event.type === 'assignment' ? 'event-icon-assignment' :
                  event.type === 'webinar' ? 'event-icon-webinar' :
                  'event-icon-exam'
                }`}>
                  {event.type === 'assignment' ? <ClipboardList size={16} /> :
                   event.type === 'webinar' ? <Bell size={16} /> :
                   <Award size={16} />}
                </div>
                <div className="event-content">
                  <p className="event-title">{event.title}</p>
                  <p className="event-date">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="view-all-btn">
            View calendar →
          </button>
        </div>

        {/* Exam Performance Card */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">Exam Performance</h2>
            <BarChart2 className="card-icon icon-green" />
          </div>
          <div>
            {exams.map((exam, index) => (
              <div key={index} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>{exam.subject}</span>
                  <span style={{ fontSize: '14px', color: '#64748b' }}>{exam.score}/{exam.total}</span>
                </div>
                <div className="progress-container">
                  <div 
                    className="progress-bar"
                    style={{ 
                      width: `${(exam.score / exam.total) * 100}%`,
                      backgroundColor: exam.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div style={{ 
            marginTop: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <p className="stat-label">Overall Performance</p>
              <p style={{ fontWeight: '700', margin: '4px 0 0', color: '#2d3748' }}>85%</p>
            </div>
            <button className="view-all-btn">
              View details →
            </button>
          </div>
        </div>

        {/* Quick Stats Card - Full Width */}
        
      </div>
    </div>
  );
};

export default Dashboard;