import React from 'react';
import '../styles/NavBar.css';


const NavBar = ({ onHomeClick, onNotesClick }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand" style={{ marginLeft: '5px' }}>
        ScribbleSpace
      </span>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={onHomeClick}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={onNotesClick}>
              Notes
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
