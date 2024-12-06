import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <aside className="sidebar-hearing">
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/schedule">Court Schedule</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </aside>
    );
}

export default Sidebar;