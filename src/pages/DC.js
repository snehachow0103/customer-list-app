import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/styles.css';

const DC = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>DC</h1>
        {/* Billing page content goes here */}
      </div>
    </div>
  );
};

export default DC;
