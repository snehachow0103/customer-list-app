import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/billing">Billing</Link></li>
        <li><Link to="/dc">DC</Link></li>
        <li><Link to="/customer-po">Customer PO</Link></li>
        <li><Link to="/sales">Sales</Link></li>
        <li><Link to="/qc">QC</Link></li>
        <li><Link to="/accounts">Accounts</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/other">Other</Link></li>
        <li><Link to="/transport">Transport</Link></li>
        <li><Link to="/hrm">HRM</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
