/* 
  File Name: services.jsx
  Name: Tharrun Ragunathan
  Student ID: 301312280
  Date: May 20th 2024
*/
//==========home page===========
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <p>
        Hello<br />
        My name is Tharrun Ragunathan. This website was created as part of a school assignment for a web development class. Below are links to other pages on the site.
      </p>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </main>
  );
}
