import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Subjects = () => {
  const subjects = [
    { id: 1, name: "Mathematics", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6h14D-3edC9jTxTyKz7GvQCwBCKKjGh2n0g&s" 
    },
    { id: 2, name: "Physics", 
      logo: "https://img.freepik.com/premium-vector/vector-hand-drawing-physics-education-doodle-icon-idea-set_602351-720.jpg?semt=ais_hybrid" 
    },
    { id: 3, name: "Chemistry", 
      logo: "https://static.vecteezy.com/system/resources/thumbnails/000/224/398/small_2x/chemistry-vector.jpg" 
    },
    { id: 4, name: "Biology", 
      logo: "https://thumbs.dreamstime.com/b/biology-hand-drawn-doodles-lettering-education-science-vector-white-background-135246167.jpg" 
    },
    { id: 5, name: "History", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEEgyTX0Cyt8KkBmRDnXEh5hFLoUqz2EBcA&s" 
    },
  ];

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Subjects</h2>
        <div className="row">
          {subjects.map((subject) => (
            <div key={subject.id} className="col-md-3 mb-4">
              <Link
                to={`/subjects/${subject.id}`}
                className="card text-decoration-none text-dark h-100 shadow-sm"
              >
                <div className="card-body text-center rounded-3" style={{ border: '2px solid #FF5633' }}>
  <img
    src={subject.logo}
    alt={subject.name}
    className="img-fluid mb-3"
    style={{ width: '100px', height: '100px' }}
  />
  <h5 className="card-title text-danger">{subject.name}</h5>
</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Subjects;
