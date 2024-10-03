import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import './App.css'; 
import Dashboard from './components/Dashboard'; 
import DailyEntryForm from './components/DailyEntryForm'; 
import DateWiseTable from './components/DateWiseTable'; 
import coffee1 from './images/coffee1.jpg'; 
import coffee2 from './images/coffee2.jpg'; 
import coffee3 from './images/coffee3.jpg'; 

function App() {
  const [records, setRecords] = useState([]);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  return (
    <Router>
      <nav>
        <Link to="/"style={{color:'red'}} >Dashboard</Link> | <Link to="/products"style={{color:'red' }}>Coffee Products</Link>
      </nav>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <h1>~ My Coffee Shop Dashboard ~</h1>
                <Dashboard records={records} />
                <DailyEntryForm addRecord={addRecord} />
                <DateWiseTable records={records} />
              </>
            } 
          />
          
          <Route 
            path="/products" 
            element={
              <div style={{ padding: '20px' }}>
                <h1>Coffee Products</h1>
                <h2>Here is a list of our amazing coffee products!</h2>
                <div className="coffee-gallery">
                  <img src={coffee1} alt="Coffee 1" className="coffee-image" />
                  <img src={coffee2} alt="Coffee 2" className="coffee-image" />
                  <img src={coffee3} alt="Coffee 3" className="coffee-image" />
                </div>
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
