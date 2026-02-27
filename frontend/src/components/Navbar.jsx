import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>GST Filing Agent</h1>
      </div>
      <div className="navbar-actions">
        <div className="user-profile">
          <div className="profile-icon">
            <span>U</span>
          </div>
        </div>
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
