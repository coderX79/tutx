import Sidebar from "./components/Sidebar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Subjects from "./pages/Subjects.jsx";
import SubjectPosts from "./components/SubjectPosts.jsx";
import TuitionFees from "./pages/TuitionFees.jsx";
import Notices from "./pages/Notices.jsx";
import Grades from "./pages/Grades.jsx";

function App() {
    return (
        <div className="app-container">
            <Router>
                <Sidebar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/subjects" element={<Subjects />} />
                        <Route path="/subjects/:subjectId" element={<SubjectPosts />} />
                        <Route path="/grades" element={<Grades/>} />
                        <Route path="/tuition-fees" element={<TuitionFees />} />
                        <Route path="/notices" element={<Notices />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;