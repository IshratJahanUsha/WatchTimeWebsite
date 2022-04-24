import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className='title'>WatchTime</div>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/blogs">Blogs</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;