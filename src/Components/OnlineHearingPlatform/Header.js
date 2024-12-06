import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <h1>Online Court Hearings</h1>
            <nav>
                <Link to="/hearing-home">Home</Link>
                <Link to="/schedule">Court Schedule</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
}

export default Header;