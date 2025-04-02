// src/pages/Grades.jsx
 import './Grades.css';

const Grades = () => {
  // Sample grade data with completion percentages
  const grades = [
    {
      id: 1,
      course: "History",
      instructor: "John Doe",
      progress: 78,
      grade: "B+",
      assignments: [
        { name: "Intro Project", score: 85, maxScore: 100 },
        { name: "Components Lab", score: 92, maxScore: 100 },
        { name: "Final Project", score: 78, maxScore: 100 }
      ]
    },
    {
      id: 2,
      course: "Maths",
      instructor: "Jane Smith",
      progress: 92,
      grade: "A-",
      assignments: [
        { name: "Linked Lists", score: 88, maxScore: 100 },
        { name: "Sorting Algorithms", score: 95, maxScore: 100 },
        { name: "Final Exam", score: 82, maxScore: 100 }
      ]
    }
  ];

  return (
    <div className="grades-page">
      <header className="grades-header">
        <h1>Academic Progress</h1>
        <p>Your course grades and performance</p>
      </header>

      <div className="grades-container">
        {grades.map((course) => (
          <div key={course.id} className="grade-card">
            <div className="grade-overview">
              <div className="circular-progress" style={{ '--progress': course.progress }}>
                <svg className="progress-ring" viewBox="0 0 100 100">
                  <circle className="progress-ring-circle" cx="50" cy="50" r="45" />
                  <text x="50" y="50" className="progress-text">{course.progress}%</text>
                </svg>
              </div>
              <div className="course-info">
                <h2>{course.course}</h2>
                <p className="instructor">{course.instructor}</p>
                <div className={`final-grade grade-${course.grade[0].toLowerCase()}`}>
                  {course.grade}
                </div>
              </div>
            </div>

            <div className="assignments-list">
              <h3>Assignments</h3>
              <ul>
                {course.assignments.map((assignment, index) => (
                  <li key={index}>
                    <span className="assignment-name">{assignment.name}</span>
                    <span className="assignment-score">
                      {assignment.score}<small>/{assignment.maxScore}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grades;