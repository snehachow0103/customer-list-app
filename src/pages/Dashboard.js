import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/styles.css';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="dashboard-overview">
          <div className="dashboard-section">
            <h3>Today Accounts Overview</h3>
            <table>
              <thead>
                <tr>
                  <th>Plant</th>
                  <th>Today Invoice Quantity</th>
                  <th>This Month Invoice Quantity</th>
                  <th>This Month DC Quantity</th>
                  <th>This Month Sales Document</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FORTUNE CONCRETE</td>
                  <td>0.00</td>
                  <td>1198.90</td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dashboard-section">
            <h3>DC Overview</h3>
            <table>
              <thead>
                <tr>
                  <th>Plant</th>
                  <th>Customer</th>
                  <th>Grade</th>
                  <th>Quantity</th>
                  <th>No Of Invoice</th>
                  <th>Net Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>All Plant</td>
                  <td>-</td>
                  <td>-</td>
                  <td>0.00</td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="dashboard-section">
          <h3>Invoice Overview</h3>
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Grade</th>
                <th>Quantity</th>
                <th>No Of Invoice</th>
                <th>Net Amount</th>
                <th>Plant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RAJA DEVELOPERS BUILDERS</td>
                <td>M-40</td>
                <td>3.50</td>
                <td>1.00</td>
                <td>19250.00</td>
                <td>FORTUNE CONCRETE</td>
              </tr>
              <tr>
                <td>SREE CHAITANYA CONSTRUCTIONS</td>
                <td>M-50</td>
                <td>7.00</td>
                <td>2.00</td>
                <td>39550.00</td>
                <td>FORTUNE CONCRETE</td>
              </tr>
              <tr>
                <td>DKT INFRA AND DEVELOPERS PRIVATE LIMITED</td>
                <td>M-20</td>
                <td>4.50</td>
                <td>1.00</td>
                <td>18900.00</td>
                <td>FORTUNE CONCRETE</td>
              </tr>
              <tr>
                <td>GUMMADI RAJENDRA PRASAD</td>
                <td>M-30</td>
                <td>7.00</td>
                <td>1.00</td>
                <td>29400.00</td>
                <td>FORTUNE CONCRETE</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Total</td>
                <td>22.00</td>
                <td>5.00</td>
                <td>107100.00</td>
                <td>-</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="status-bar">
          <div>7 Days Pending: <strong>23</strong></div>
          <div>28 Days Pending: <strong>17</strong></div>
          <div>Pending For New Cast: <strong>129</strong></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
