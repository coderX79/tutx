// SubjectPosts.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubjectPosts = () => {
  const { subjectId } = useParams();
  const [posts, setPosts] = useState([]);
  const [subject, setSubject] = useState(null);

  // Sample data - replace with API calls
  const subjects = [
    { id: 1, name: 'Mathematics', logo: 'math-logo.png' },
    { id: 2, name: 'Physics', logo: 'physics-logo.png' },
    { id: 3, name: 'Chemistry', logo: 'chemistry-logo.png' },
    { id: 4, name: 'Biology', logo: 'biology-logo.png' },
  ];

  const allPosts = [
    { 
      id: 1, 
      subjectId: 1, 
      title: 'Algebra Basics', 
      content: 'Introduction to algebraic equations...',
      author: 'Admin',
      date: '2024-03-01'
    },
    { 
      id: 2, 
      subjectId: 1, 
      title: 'Geometry Fundamentals', 
      content: 'Understanding basic geometry concepts...',
      author: 'Admin',
      date: '2024-03-05'
    },
  ];

  useEffect(() => {
    // Simulate API call
    const selectedSubject = subjects.find(sub => sub.id === Number(subjectId));
    const subjectPosts = allPosts.filter(post => post.subjectId === Number(subjectId));
    
    setSubject(selectedSubject);
    setPosts(subjectPosts);
  }, [subjectId]);

  if (!subject) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <Link to="/subjects" className="btn btn-outline-primary mb-4">
        Back to Subjects
      </Link>
      
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">{subject.name} Posts</h3>
        </div>
        
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 text-center border-end">
              <img
                src={subject.logo}
                alt={subject.name}
                className="img-fluid mb-3"
                style={{ maxWidth: '150px' }}
              />
              <h4>{subject.name}</h4>
            </div>
            
            <div className="col-md-9">
              {posts.length === 0 ? (
                <div className="alert alert-info">No posts available for this subject</div>
              ) : (
                posts.map(post => (
                  <div key={post.id} className="card mb-3 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.content}</p>
                      <div className="text-muted small">
                        Posted by: {post.author} | {post.date}
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

export default SubjectPosts;