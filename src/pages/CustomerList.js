import React from 'react';
import './CustomerList.css'; // Import the CSS file

const CustomerList = () => {
  return (
    <div className="customer-list">
      <div className="customer-list-header">
        <button className="alphabetical-wise">Alphabetical Wise</button>
        <button className="clear">Clear</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>123-456-7890</td>
            <td>john.doe@example.com</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>987-654-3210</td>
            <td>jane.smith@example.com</td>
          </tr>
          {/* Add more customers as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
