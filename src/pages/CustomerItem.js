// src/components/CustomerItem.js
import React from 'react';

const CustomerItem = ({ customer }) => {
  return (
    <tr>
      <td>{customer.name}</td>
      <td>{customer.address}</td>
      <td>{customer.phone}</td>
      <td>{customer.gstin}</td>
      <td>{customer.pan}</td>
      <td>{customer.plant}</td>
      <td>{customer.salesPerson}</td>
      <td><button>...</button></td>
    </tr>
  );
};

export default CustomerItem;
