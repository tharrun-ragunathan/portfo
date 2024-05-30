/* 
  File Name: services.jsx
  Name: Tharrun Ragunathan
  Student ID: 301312280
  Date: May 20th 2024
*/
//==========contact page===========
import React from 'react';

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
  }

  return (
    <main>
      <section className="contact">
        <h1>Contact Me</h1>
        <div className="contact-info">
          <p>Email: Tharrunr@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name" name="first-name" required />
          
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" name="last-name" required />
          
          <label htmlFor="contact-number">Contact Number:</label>
          <input type="tel" id="contact-number" name="contact-number" required />
          
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
