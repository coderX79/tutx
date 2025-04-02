import "./Navbar.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                <h2>Tuitix</h2>
            </div>
            <ul className="navbar-li">
                <li> <NavLink to="/" activeClassName="active"> <h4>Dashboard</h4> </NavLink> </li>
                <li> <NavLink to="/profile" activeClassName="active"> <h4>Profile</h4> </NavLink> </li>
                <li> <NavLink to="/subjects" activeClassName="active"> <h4>Subjects</h4> </NavLink> </li>
                <li> <NavLink to="/grades" activeClassName="active"> <h4>Grades</h4> </NavLink></li>
                <li> <NavLink to="/tuition-fees" activeClassName="active"> <h4>Tuition fees</h4> </NavLink> </li>
                <li> <NavLink to="/notices" activeClassName="active"> <h4>Notices</h4> </NavLink> </li>
                <li> <NavLink to="/support" activeClassName="active"> <h4>Support</h4> </NavLink> </li>
                <li> <NavLink to="/user-settings" activeClassName="active"> <h4>User Settings</h4> </NavLink> </li>
            </ul>
        </nav>
    );
}

export default Navbar;
