/* 
  File Name: services.jsx
  Name: Tharrun Ragunathan
  Student ID: 301312280
  Date: May 20th 2024
*/
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header style={{ backgroundColor: 'grey' }}>
        <img src='portlogo.png' alt="Portfolio Logo" className="logo-image" height={200}/>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link> | <Link to="/project">Project</Link> | <Link to="/contact">Contact</Link> | <Link to="/services">Services</Link> 
        </nav>
      </header>
      <hr />
    </>
  );
}

