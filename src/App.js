import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Billing from './pages/Billing';
import DC from './pages/DC';
import CustomerPO from './pages/CustomerPO';
import Sales from './pages/Sales';
import QC from './pages/QC';  // Import the QC component
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" component={Dashboard} />
          <Route path="/billing" component={Billing} />
          <Route path="/dc" component={DC} />
          <Route path="/customer-po" component={CustomerPO} />
          <Route path="/sales" component={Sales} />
          <Route path="/qc" component={QC} />  {/* Add the QC route */}
          <Route component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
