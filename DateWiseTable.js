import React from 'react';
import { Link } from 'react-router-dom'; 

function DateWiseTable({ records }) {
  return (
    <div>
      <h2>/ Date-wise Profit & Loss /</h2>
      <table>
        <thead>
          <tr>
          <th>Date :</th>&nbsp;
          &nbsp; <th>Income :</th>&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;<th>Cost :</th>&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;<th>Profit :</th>&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;<th>Loss :</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>&nbsp;
              <td>Rs.{record.income}</td>&nbsp;
              <td>Rs.{record.expenses}</td>&nbsp;
              <td>Rs.{record.profit}</td>&nbsp;
              <td>Rs.{record.loss}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add a link to Coffee Products */}
      <Link to="/products" style={{ marginTop: '20px', display: 'inline-block',color:'red' }}>
        View Coffee Products
      </Link>
    </div>
  );
}

export default DateWiseTable;
