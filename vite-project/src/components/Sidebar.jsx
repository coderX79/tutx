import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
        { path: "/", name: "Dashboard", icon: "🏠" },
        { path: "/profile", name: "Profile", icon: "👤" },
        { path: "/subjects", name: "Subjects", icon: "📚" },
        { path: "/grades", name: "Grades", icon: "🎓"},
        { path: "/tuition-fees", name: "Tuition Fees", icon: "💰" },
        { path: "/notices", name: "Notices", icon: "🔔" }
    ];

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <div className="sidebar-header">
                <div className="logo-container">
                    {isOpen && <img src={logo} alt="Logo" className="logo" />}
                    {isOpen && <h2>Tuitix</h2>}
                </div>
                <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            <ul className="sidebar-menu">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <NavLink 
                            to={item.path} 
                            className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
                        >
                            <span className="icon">{item.icon}</span>
                            <span className={`link-text ${isOpen ? "show" : "hide"}`}>{item.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
