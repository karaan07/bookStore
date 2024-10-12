// src/courses/Courses.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Course from '../components/Course';

function Courses() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen mt-32'> {/* Increase the mt value as needed */}
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;

