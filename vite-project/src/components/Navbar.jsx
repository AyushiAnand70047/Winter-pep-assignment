import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand me-3" to="/">
          <i className="bi bi-house-door-fill"></i> Home
        </Link>
        <Link className="navbar-brand" to="/form">
          <i className="bi bi-file-earmark-text-fill"></i> Form
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* additional navigation items here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
